import { useEffect } from 'react';
import { pullCartFromServer } from '@/utils/pullCartFromServer';
import { pushCartToServer } from '@/utils/pushCartToServer';
import { useAuth } from './useAuth';

export function useCartSync() {
  const { user } = useAuth(); // отримуємо userId

  // When user logs in — pull cart from server and merge into localStorage
  useEffect(() => {
    if (user?.id) {
      pullCartFromServer(user.id);
    }
  }, [user?.id]);

  //  When user logs out — push local cart to server before sign out
  const syncBeforeLogout = async () => {
    if (user?.id) {
      await pushCartToServer(user.id);
    }
  };

  //  When user places an order — push local cart to server before creating order
  const syncBeforeCheckout = async () => {
    if (user?.id) {
      await pushCartToServer(user.id);
    }
  };

  return {
    syncBeforeLogout,
    syncBeforeCheckout,
  };
}
