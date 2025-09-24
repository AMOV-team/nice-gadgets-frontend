import { createContext } from 'react';
import type { BurgerMenuContextType } from '@/types/BurgerMenuContextType.ts';

export const BurgerMenuContext = createContext<
  BurgerMenuContextType | undefined
>(undefined);
