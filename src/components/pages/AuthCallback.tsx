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
      // 🧠 Витягуємо токени з подвійного хешу
      const hashParts = window.location.href.split('#');
      const tokenString =
        hashParts.length > 2 ? hashParts.slice(2).join('#') : hashParts[1];
      if (!tokenString) {
        console.warn('⚠️ Токени не знайдені в URL');
        return;
      }

      const params = new URLSearchParams(tokenString);
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      console.log('🔐 access_token:', access_token?.slice(0, 12), '...');
      console.log('🔐 refresh_token:', refresh_token?.slice(0, 12), '...');

      if (!access_token || !refresh_token) {
        console.warn('❌ Токени не валідні або відсутні');
        return;
      }

      // 🔐 Встановлюємо сесію
      const { error: setError } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (setError) {
        console.error('❌ setSession error:', setError.message);
        return;
      }

      // 🧹 Очищаємо хеш
      window.location.hash = '';

      // 📦 Отримуємо сесію
      const {
        data: { session },
        error: getError,
      } = await supabase.auth.getSession();
      if (getError) {
        console.error('❌ getSession error:', getError.message);
        return;
      }

      if (!session) {
        console.warn('❌ session === null після setSession');
        return;
      }

      const userId = session.user?.id;
      if (!userId) {
        console.warn('❌ Користувач не знайдений у session.user');
        return;
      }

      console.log('✅ Користувач авторизований:', userId);

      // 🛒 Підтягуємо корзину
      const cartItems = await pullCartFromServer(userId);
      await setItems(cartItems ?? []);
      console.log('🧩 Корзина підтягнута після Google логіну');

      // 🚀 Редірект на головну
      navigate('/');
    };

    sync();
  }, [setItems, navigate]);

  return <div>🔄 Авторизація через Google…</div>;
}
