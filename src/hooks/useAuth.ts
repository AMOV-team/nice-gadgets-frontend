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
        const { error } = await supabase.from('profiles').upsert({
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.user_metadata?.full_name ?? currentUser.email,
          avatar: currentUser.user_metadata?.avatar_url ?? '',
        });

        if (error) {
          throw new Error(`Upsert error (auth change): ${error.message}`);
        }
      }
    };

    getUserFromSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
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
              throw new Error(`Upsert error (auth change): ${error.message}`);
            }
          });
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth-callback`,
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
