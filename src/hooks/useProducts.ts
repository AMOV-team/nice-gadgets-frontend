import { useState, useEffect } from 'react';
import { client } from '@/utils/fetchClient';
import type { Product } from '@/types/Product';
import { useLoader } from './useLoader';

type SortBy = 'newest' | 'hot';

export const useProducts = (category: string, sortBy?: SortBy) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(true);
    client
      .get<Product[]>('/products?select=*')
      .then((data) => {
        let filtered = data.filter((p) => p.category === category);

        if (sortBy === 'newest') {
          filtered = filtered
            .sort((a, b) => (b.year || 0) - (a.year || 0))
            .slice(0, 10);
        } else if (sortBy === 'hot') {
          filtered = filtered
            .sort(
              (a, b) =>
                (b.fullPrice - b.price || 0) - (a.fullPrice - a.price || 0),
            )
            .slice(0, 10);
        }

        setProducts(filtered);
        setError(null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [category, sortBy, setIsLoading]);

  return { products, error };
};
