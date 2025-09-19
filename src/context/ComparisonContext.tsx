import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product';

export interface ComparisonContextType {
  comparison: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: Product['id']) => void;
  isInComparison: (productId: Product['id']) => boolean;
  toggleComparison: (product: Product) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(
  undefined,
);

interface ComparisonProviderProps {
  children: ReactNode;
}

export const ComparisonProvider: React.FC<ComparisonProviderProps> = ({
  children,
}) => {
  const [comparison, setComparison] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('comparison');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('comparison', JSON.stringify(comparison));
  }, [comparison]);

  const addToComparison = (product: Product) => {
    setComparison((prev) =>
      prev.some((p) => p.id === product.id) ? prev : [...prev, product],
    );
  };

  const removeFromComparison = (productId: Product['id']) => {
    setComparison((prev) => prev.filter((p) => p.id !== productId));
  };

  const isInComparison = (productId: Product['id']) =>
    comparison.some((p) => p.id === productId);

  const toggleComparison = (product: Product) => {
    if (isInComparison(product.id)) removeFromComparison(product.id);
    else addToComparison(product);
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparison,
        addToComparison,
        removeFromComparison,
        isInComparison,
        toggleComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};

export { ComparisonContext };
