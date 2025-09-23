/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from '@/lib/supabase';

export async function pullCartFromServer(userId: string) {
  const { data, error } = await supabase
    .from('cart_items')
    .select('*')
    .eq('user_id', userId);

  if (error || !data) {
    console.error('❌ Помилка завантаження корзини з сервера:', error?.message);
    return;
  }

  const raw = localStorage.getItem('react-use-cart-main-cart');
  const localItems = raw ? JSON.parse(raw).items || [] : [];

  const mergedItems = [...localItems];

  for (const serverItem of data) {
    const exists = localItems.find((i: any) => i.id === serverItem.product_id);
    if (!exists) {
      mergedItems.push({
        id: serverItem.product_id,
        quantity: serverItem.quantity,
        metadata: serverItem.metadata,
        name: serverItem.name || '',
        price: serverItem.price || 0,
        image: serverItem.metadata?.image || '',
        itemTotal: serverItem.quantity * (serverItem.metadata?.price || 0),
      });
    }
  }

  const formatted = {
    id: 'main-cart',
    isEmpty: mergedItems.length === 0,
    totalItems: mergedItems.reduce((sum, i) => sum + i.quantity, 0),
    totalUniqueItems: mergedItems.length,
    cartTotal: mergedItems.reduce((sum, i) => sum + i.itemTotal, 0),
    items: mergedItems,
    metadata: {},
  };

  localStorage.setItem('react-use-cart-main-cart', JSON.stringify(formatted));
  console.log('✅ Корзина оновлена з сервера');

  return mergedItems;
}
