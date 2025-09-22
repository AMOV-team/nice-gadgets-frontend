/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface FavoritesContextType {
  favorites: Item[];
  addToFavorites: (item: Item) => void;
  removeFromFavorites: (itemId: Item['id']) => void;
  isFavorite: (itemId: Item['id']) => boolean;
  toggleFavorite: (item: Item) => void;
}
export interface Item {
  id: string;
  price: number;
  quantity?: number;
  itemTotal?: number;
  [key: string]: any;
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
  const [favorites, setFavorites] = useState<Item[]>(() => {
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

  const addToFavorites = (item: Item) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === item.id) ? prev : [...prev, item],
    );
  };

  const removeFromFavorites = (itemId: Item['id']) => {
    setFavorites((prev) => prev.filter((p) => p.id !== itemId));
  };

  const isFavorite = (itemId: Item['id']) =>
    favorites.some((p) => p.id === itemId);

  const toggleFavorite = (item: Item) => {
    if (isFavorite(item.id)) removeFromFavorites(item.id);
    else addToFavorites(item);
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
