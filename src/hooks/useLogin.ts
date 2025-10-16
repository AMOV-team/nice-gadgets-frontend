import { useCart } from 'react-use-cart';
import { supabase } from '@/lib/supabase';
import { pullCartFromServer } from '@/utils/pullCartFromServer';

export function useLogin() {
  const { setItems } = useCart();

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const userId = data?.user?.id;
    if (userId) {
      const cartItems = await pullCartFromServer(userId);
      setItems(cartItems ?? []); //
    }

    return data;
  };

  return { login };
}
