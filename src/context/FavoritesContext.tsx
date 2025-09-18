import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product';

export interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: Product['id']) => void;
  isFavorite: (productId: Product['id']) => boolean;
  toggleFavorite: (product: Product) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === product.id) ? prev : [...prev, product],
    );
  };

  const removeFromFavorites = (productId: Product['id']) => {
    setFavorites((prev) => prev.filter((p) => p.id !== productId));
  };

  const isFavorite = (productId: Product['id']) =>
    favorites.some((p) => p.id === productId);

  const toggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) removeFromFavorites(product.id);
    else addToFavorites(product);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext };
