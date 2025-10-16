/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from '@/lib/supabase';

export async function pushCartToServer(
  userId: string,
  skipIfInitialSync = false,
) {
  const raw = localStorage.getItem('react-use-cart-main-cart');
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    const items = parsed.items || [];

    if (skipIfInitialSync && items.length === 0) {
      return;
    }

    const payload = items.map((item: any) => ({
      product_id: item.id,
      quantity: item.quantity,
      metadata: item.metadata || {},
      price: item.price,
      name: item.name,
    }));

    const { error } = await supabase.rpc('replace_cart', {
      user_id_param: userId,
      items: payload,
    });

    if (error) {
      throw new Error(`replace_cart failed: ${error.message}`);
    }
  } catch (err: any) {
    throw new Error(`Cart sync failed: ${err.message}`);
  }
}
