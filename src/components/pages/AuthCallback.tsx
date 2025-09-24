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
      const hashParts = window.location.href.split('#');
      const tokenString =
        hashParts.length > 2 ? hashParts.slice(2).join('#') : hashParts[1];
      if (!tokenString) {
        return;
      }

      const params = new URLSearchParams(tokenString);
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      if (!access_token || !refresh_token) {
        return;
      }

      const { error: setError } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (setError) {
        console.error('❌ setSession error:', setError.message);
        return;
      }

      window.location.hash = '';

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

      const cartItems = await pullCartFromServer(userId);
      await setItems(cartItems ?? []);
      navigate('/');
    };

    sync();
  }, [setItems, navigate]);

  return <div>🔄 Авторизація через Google…</div>;
}
