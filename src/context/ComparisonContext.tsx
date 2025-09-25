import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Item } from './FavoritesContext';

export interface ComparisonContextType {
  comparison: Item[];
  addToComparison: (item: Item) => void;
  removeFromComparison: (itemId: Item['id']) => void;
  isInComparison: (itemId: Item['id']) => boolean;
  toggleComparison: (item: Item) => void;
  clearComparison: () => void;
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
  const [comparison, setComparison] = useState<Item[]>(() => {
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

  const addToComparison = (item: Item) => {
    setComparison((prev) =>
      prev.some((p) => p.id === item.id) ? prev : [...prev, item],
    );
  };

  const removeFromComparison = (itemId: Item['id']) => {
    setComparison((prev) => prev.filter((p) => p.id !== itemId));
  };

  const isInComparison = (itemId: Item['id']) =>
    comparison.some((p) => p.id === itemId);

  const toggleComparison = (item: Item) => {
    if (isInComparison(item.id)) removeFromComparison(item.id);
    else addToComparison(item);
  };

  const clearComparison = () => {
    setComparison([]);
    localStorage.removeItem('comparison');
  };

  return (
    <ComparisonContext.Provider
      value={{
        comparison,
        addToComparison,
        removeFromComparison,
        isInComparison,
        toggleComparison,
        clearComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};

export { ComparisonContext };
