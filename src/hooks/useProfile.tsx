import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useProfile(userId: string | null) {
  const [profile, setProfile] = useState<null | {
    id: string;
    email: string;
    name: string;
    avatar: string;
  }>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      setProfile(data);
    };

    fetchProfile();
  }, [userId]);

  return profile;
}
