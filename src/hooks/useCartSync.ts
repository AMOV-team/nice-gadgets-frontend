import { useEffect } from 'react';
import { pullCartFromServer } from '@/utils/pullCartFromServer';
import { pushCartToServer } from '@/utils/pushCartToServer';
import { useAuth } from './useAuth';

export function useCartSync() {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.id) {
      pullCartFromServer(user.id);
    }
  }, [user?.id]);

  const syncBeforeLogout = async () => {
    if (user?.id) {
      await pushCartToServer(user.id);
    }
  };

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
