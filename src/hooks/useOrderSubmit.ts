import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from 'react-use-cart';

export const useOrderSubmit = () => {
  const { user } = useAuth();
  const { items, emptyCart } = useCart();

  const generateOrderNumber = () => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).slice(-6).toUpperCase();
    return `ORD-${date}-${random}`;
  };

  const handleSubmit = async () => {
    if (!user?.id) {
      console.warn('❌ Користувач не авторизований');
      return;
    }

    if (items.length === 0) {
      console.warn('⚠️ Корзина пуста, замовлення не створено');
      return;
    }

    const orderPayload = {
      user_id: user.id,
      order_number: generateOrderNumber(),
      items,
    };

    const { error: insertError } = await supabase
      .from('orders')
      .insert([orderPayload]);

    if (insertError) {
      console.error('❌ Помилка при створенні замовлення:', insertError);
    } else {
      console.log('✅ Замовлення створено:', orderPayload.order_number);
      emptyCart();
      // Можеш показати toast або редірект
    }
  };

  return { handleSubmit };
};
