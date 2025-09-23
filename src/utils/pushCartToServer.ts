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

    // якщо це стартовий sync (після логіну), можна пропустити пуш
    if (skipIfInitialSync && items.length === 0) {
      console.log(
        '⏳ Пропускаємо пуш на сервер поки корзина порожня (initial sync)',
      );
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
      console.error(
        '❌ Помилка синхронізації корзини через replace_cart:',
        error.message,
      );
    } else {
      console.log('✅ Корзина повністю замінена на сервері');
    }
  } catch (err) {
    console.error('❌ Помилка парсингу корзини:', err);
  }
}
