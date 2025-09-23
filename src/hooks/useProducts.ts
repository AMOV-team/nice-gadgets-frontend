import { useState, useEffect } from 'react';
import { client } from '@/utils/fetchClient';
import type { Product } from '@/types/Product';
import { useLoader } from './useLoader';

export const useProducts = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    client
      .get<Product[]>('/products?select=*')
      .then((data) => {
        setProducts(data.filter((p) => p.category === category));
        setError(null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [category, setIsLoading]);

  return { products, error };
};
