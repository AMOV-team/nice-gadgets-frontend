import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type CartItem = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
};

type RawFavorite = Omit<Favorite, 'product'> & {
  product: Favorite['product'][];
};

type Favorite = {
  id: string;
  user_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
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

      const { data: rawFavorites } = await supabase
        .from('favorites')
        .select(
          `
          id,
          user_id,
          product_id,
          product:products (
            id,
            name,
            image,
            price
          )
        `,
        )
        .eq('user_id', userId);

      const normalizedFavorites: Favorite[] = (rawFavorites ?? []).map(
        (fav: RawFavorite) => ({
          ...fav,
          product: Array.isArray(fav.product) ? fav.product[0] : fav.product,
        }),
      );

      const { data: comps } = await supabase
        .from('comparisons')
        .select('*')
        .eq('user_id', userId);

      setCart(cartItems ?? []);
      setFavorites(normalizedFavorites);
      setComparisons(comps ?? []);
    };

    fetchData();
  }, [userId]);

  return { cart, favorites, comparisons };
}
