import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useAuth() {
  const [user, setUser] = useState<null | { id: string }>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const currentUser = data.user;
      setUser(currentUser);

      if (currentUser) {
        await supabase.from('profiles').upsert({
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.user_metadata.full_name,
          avatar: currentUser.user_metadata.avatar_url,
        });
      }
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        supabase.from('profiles').upsert({
          id: currentUser.id,
          email: currentUser.email,
          name: currentUser.user_metadata.full_name,
          avatar: currentUser.user_metadata.avatar_url,
        });
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { user, signInWithGoogle, signOut };
}
