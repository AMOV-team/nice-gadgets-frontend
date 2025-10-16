import { useEffect, useRef } from 'react';
import { useCart } from 'react-use-cart';
import { pushCartToServer } from '@/utils/pushCartToServer';
import { useAuth } from './useAuth';

export const useCartSyncManager = () => {
  const { user } = useAuth();
  const userId = user?.id;
  const { cartTotal, totalItems } = useCart();

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!userId) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      pushCartToServer(userId);
    }, 1000);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [userId, cartTotal, totalItems]);
};
