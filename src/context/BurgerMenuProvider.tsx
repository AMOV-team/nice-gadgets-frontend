import { type ReactNode, useState } from 'react';
import { BurgerMenuContext } from '@/context/BurgerMenuContext';

export const BurgerMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  return (
    <BurgerMenuContext.Provider
      value={{ isBurgerMenuActive, setIsBurgerMenuActive }}
    >
      {children}
    </BurgerMenuContext.Provider>
  );
};
