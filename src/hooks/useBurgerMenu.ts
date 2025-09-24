import { useContext } from 'react';
import { BurgerMenuContext } from '@/context/BurgerMenuContext.ts';

export const useBurgerMenu = () => {
  const ctx = useContext(BurgerMenuContext);
  if (!ctx)
    throw new Error('useBurgerMenu must be used within BurgerMenuProvider');
  return ctx;
};
