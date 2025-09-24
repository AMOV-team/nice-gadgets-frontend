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
      return;
    }

    if (items.length === 0) {
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
      throw new Error(
        `Помилка при створенні замовлення: ${insertError.message}`,
      );
    } else {
      emptyCart();
    }
  };

  return { handleSubmit };
};
