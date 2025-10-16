/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export const usePullOrders = (userId: string | null) => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!userId) return;

    supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setOrders(data);
      });
  }, [userId]);

  return orders;
};
