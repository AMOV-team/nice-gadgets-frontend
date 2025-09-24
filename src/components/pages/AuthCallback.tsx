import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { supabase } from '@/lib/supabase';
import { pullCartFromServer } from '@/utils/pullCartFromServer';

export default function AuthCallback() {
  const { setItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('🔄 AuthCallback викликано');

    const sync = async () => {
      const rawHash = window.location.href.split('#')[1];
      const params = new URLSearchParams(rawHash);

      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      if (access_token && refresh_token) {
        await supabase.auth.setSession({ access_token, refresh_token });
        window.location.hash = '';
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      const userId = session?.user?.id;
      if (!userId) {
        console.warn('❌ Користувач не знайдений після setSession');
        return;
      }

      const cartItems = await pullCartFromServer(userId);
      setItems(cartItems ?? []);
      console.log('🧩 Корзина підтягнута після Google логіну');

      navigate('/');
    };

    sync();
  }, [setItems, navigate]);

  return <div>🔄 Авторизація через Google…</div>;
}
