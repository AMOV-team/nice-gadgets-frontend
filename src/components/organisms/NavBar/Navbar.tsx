import { NavbarLink } from '../../atoms/link/NavbarLink';
import React from 'react';
import cn from 'classnames';

type Props = {
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const Navbar: React.FC<Props> = ({
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  return (
    <nav
      data-cy="nav"
      className={cn(
        {
          'items-center h-[100vh]': isBurgerMenuActive,
          'h-0': !isBurgerMenuActive,
        },
        `
          justify-start gap-6 sm:gap-8 sm:h-full flex sm:w-full box-border items-center text-sm
          text-black no-underline bg-white z-10 overflow-hidden flex-col sm:flex-row
          absolute top-16 left-0 right-0
          sm:static
        `,
      )}
      style={{ transition: 'height .3s ease' }}
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarLink
        text="Home"
        link="/"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
      <NavbarLink
        text="Phones"
        link="/phones"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
      <NavbarLink
        text="Tablets"
        link="/tablets"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
      <NavbarLink
        text="Accessories"
        link="/accessories"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
    </nav>
  );
};
