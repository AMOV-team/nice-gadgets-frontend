import cn from 'classnames';
import { ThemeSwitcher } from '../buttons/ThemeSwitcher.tsx';
import { NavbarIconLink } from '../link/NavbarIconLink.tsx';
import React from 'react';
import { ShoppingBagIconCounter } from '../icons/ShoppingBagIconCounter.tsx';
import { LangButton } from '../buttons/LangButton.tsx';
import { FavouritesIconCounter } from '../icons/FavouritesIconCounter.tsx';
import { useFavorites } from '../../../utils/useFavorites';

type Props = {
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const HeaderButtons: React.FC<Props> = ({
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  const { favorites } = useFavorites();

  return (
    <div
      className={cn(
        {
          'fixed bottom-0 left-0 right-0 z-10 ': isBurgerMenuActive,
          'hidden sm:flex': !isBurgerMenuActive,
        },
        `
        flex items-center flex-row h-16 sm:h-full z-30 border-t border-1 border-b-
      `,
      )}
    >
      <ThemeSwitcher />
      <LangButton />
      <NavbarIconLink
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
        link="/favorites"
      >
        <div className="size-[16px] flex justify-center items-center">
          <FavouritesIconCounter
            count={favorites.length}
            className="text-custom-primary"
          />
        </div>
      </NavbarIconLink>
      <NavbarIconLink
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
        link="/cart"
      >
        <div className="size-[16px] flex justify-center items-center">
          <ShoppingBagIconCounter className="text-custom-primary" />
        </div>
      </NavbarIconLink>
    </div>
  );
};
