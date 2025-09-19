import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type CartItem = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
};

type Favorite = {
  id: string;
  user_id: string;
  product_id: string;
};

type Comparison = {
  id: string;
  user_id: string;
  product_ids: string[];
};

export function useUserSync(userId: string | null) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [comparisons, setComparisons] = useState<Comparison[]>([]);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      const { data: cartItems } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId);

      const { data: favs } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', userId);

      const { data: comps } = await supabase
        .from('comparisons')
        .select('*')
        .eq('user_id', userId);

      setCart(cartItems ?? []);
      setFavorites(favs ?? []);
      setComparisons(comps ?? []);
    };

    fetchData();
  }, [userId]);

  return { cart, favorites, comparisons };
}
