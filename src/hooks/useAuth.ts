import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useAuth() {
  const [user, setUser] = useState<null | { id: string }>(null);

  useEffect(() => {
    const getUserFromSession = async () => {
      const { data } = await supabase.auth.getSession();
      const currentUser = data.session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        console.log('🟢 Authenticated user (session):', currentUser);

        const { error } = await supabase.from('profiles').upsert({
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.user_metadata?.full_name ?? currentUser.email,
          avatar: currentUser.user_metadata?.avatar_url ?? '',
        });

        if (error) {
          console.error('🔴 Upsert error (session):', error);
        } else {
          console.log('✅ Upsert successful (session)');
        }
      }
    };

    getUserFromSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('🔄 Auth state changed:', event, session);

        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          console.log('🟢 Authenticated user (auth change):', currentUser);

          supabase
            .from('profiles')
            .upsert({
              id: currentUser.id,
              email: currentUser.email,
              name: currentUser.user_metadata?.full_name ?? currentUser.email,
              avatar: currentUser.user_metadata?.avatar_url ?? '',
            })
            .then(({ error }) => {
              if (error) {
                console.error('🔴 Upsert error (auth change):', error);
              } else {
                console.log('✅ Upsert successful (auth change)');
              }
            });
        }
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          prompt: 'select_account',
        },
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { user, signInWithGoogle, signOut };
}
