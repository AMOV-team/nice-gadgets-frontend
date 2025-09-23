// src/pages/AuthCallback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { supabase } from '@/lib/supabase';
import { pullCartFromServer } from '@/utils/pullCartFromServer';

export default function AuthCallback() {
  const { setItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const sync = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const userId = session?.user?.id;
      if (!userId) return;

      const cartItems = await pullCartFromServer(userId);
      setItems(cartItems ?? []);
      console.log('🧩 Корзина підтягнута після Google логіну');

      // 🔙 після синхронізації редірект на головну (або /cart, якщо так хочеш)
      navigate('/');
    };

    sync();
  }, [setItems, navigate]);

  return <div>🔄 Авторизація через Google…</div>;
}
