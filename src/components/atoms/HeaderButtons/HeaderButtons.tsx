import cn from 'classnames';
import { ThemeSwitcher } from '../buttons/ThemeSwitcher.tsx';
import { NavbarIconLink } from '../link/NavbarIconLink.tsx';
import React from 'react';
import { ShoppingBagIconCounter } from '../icons/ShoppingBagIconCounter.tsx';
import { LangButton } from '../buttons/LangButton.tsx';
import { FavouritesIconCounter } from '../icons/FavouritesIconCounter.tsx';
import { useFavorites } from '../../../utils/useFavorites';
import { useCart } from 'react-use-cart';
import { ShoppingBagIcon } from '../icons/ShoppingBagIcon.tsx';

type Props = {
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const HeaderButtons: React.FC<Props> = ({
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  const { favorites } = useFavorites();
  const { isEmpty, totalItems } = useCart();

  return (
    <div
      className={cn(
        {
          'fixed bottom-0 left-0 right-0 z-10 h-16': isBurgerMenuActive,
          'hidden sm:flex': !isBurgerMenuActive,
        },
        `
        flex items-center flex-row sm:h-full z-30 border-t border-1
        absolute -bottom-[calc(100vh-46px)] left-0 right-0 sm:static
        h-0 bg-white dark:bg-black
      `,
      )}
      style={{ transition: 'height 1s ease' }}
    >
      <ThemeSwitcher />
      <LangButton />
      <NavbarIconLink
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
        link="/favorites"
      >
        <div className="size-[16px] flex justify-center items-center bg-white">
          <FavouritesIconCounter
            count={favorites.length}
            className="text-custom-primary bg-white dark:bg-black"
          />
        </div>
      </NavbarIconLink>
      <NavbarIconLink
        link="/cart"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      >
        <div className="size-[16px] flex justify-center items-center">
          {isEmpty ?
            <ShoppingBagIcon />
          : <ShoppingBagIconCounter
              className="text-custom-primary"
              count={totalItems}
            />
          }
        </div>
      </NavbarIconLink>
    </div>
  );
};
