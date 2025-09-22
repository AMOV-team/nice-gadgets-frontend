/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from '@/lib/supabase';

export async function pushCartToServer(userId: string) {
  const raw = localStorage.getItem('react-use-cart-main-cart');
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    const items = parsed.items || [];

    // if (items.length === 0) return;

    // Підготовка payload у форматі JSON-масиву
    const payload = items.map((item: any) => ({
      product_id: item.id,
      quantity: item.quantity,
      metadata: item.metadata || {},
      price: item.price,
      name: item.name,
    }));

    // Важливо: передаємо payload напряму, без stringify
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
