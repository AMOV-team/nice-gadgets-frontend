import { useState, useEffect } from 'react';
import { client } from '../utils/fetchClient';
import type { Product } from '../types/Product';

export const useProducts = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    client
      .get<Product[]>('/products?select=*')
      .then((data) => {
        const filtered = data.filter((p) => p.category === category);
        setProducts(filtered);
        setError(null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [category]);

  return { products, loading, error };
};
