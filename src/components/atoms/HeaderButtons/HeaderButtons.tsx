import cn from 'classnames';
import { NavbarIconLink } from '../link/NavbarIconLink.tsx';
import React from 'react';
import { ShoppingBagIconCounter } from '../icons/ShoppingBagIconCounter.tsx';
import { FavouritesIconCounter } from '../icons/FavouritesIconCounter.tsx';
import { useFavorites } from '../../../hooks/useFavorites.ts';
import { useCart } from 'react-use-cart';
import { ShoppingBagIcon } from '../icons/ShoppingBagIcon.tsx';
import { CompareIconCounter } from '../icons/CompareIconCounter.tsx';
import { useComparison } from '@/hooks/useComparison.ts';
import { ButtonsDropdown } from '@/components/atoms/ButtonsDropdown.tsx';
import { UserCabinetIcon } from '../icons/UserCabinetIcon.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

type Props = {
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const HeaderButtons: React.FC<Props> = ({
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  const { favorites } = useFavorites();
  const { comparison } = useComparison();
  const { isEmpty, totalItems } = useCart();
  const { user } = useAuth();

  return (
    <div
      className={cn(
        {
          'fixed bottom-0 left-0 right-0 z-10 h-fit': isBurgerMenuActive,
          'hidden min-720:flex': !isBurgerMenuActive,
        },
        `
        flex items-center flex-row min-720:divide-x min-720:divide-[hsl(var(--elements))] min-720:h-full z-30
        min-720:border-l min-720:border-solid box-border min-720:border-elements
        fixed -bottom-[calc(100vh-46px)] left-0 right-0 min-720:static
        h-0 bg-white dark:bg-black
      `,
      )}
      style={{ transition: 'height .3s ease' }}
    >
      <NavbarIconLink
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
        link="/compare"
      >
        <div className="size-[16px] flex justify-center items-center bg-white">
          <CompareIconCounter
            count={comparison.length}
            className="text-custom-primary bg-white dark:bg-black"
          />
        </div>
      </NavbarIconLink>
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
      <NavbarIconLink
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
        link={user ? '/userprofile' : '/signin'}
      >
        <div className="h-full flex justify-center items-center bg-white dark:bg-black">
          <UserCabinetIcon />
        </div>
      </NavbarIconLink>
      <ButtonsDropdown handleIsBurgerMenuActive={handleIsBurgerMenuActive} />
    </div>
  );
};
