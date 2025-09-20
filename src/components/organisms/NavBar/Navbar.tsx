import { NavbarLink } from '../../atoms/link/NavbarLink';
import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

type Props = {
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const Navbar: React.FC<Props> = ({
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  const { t } = useTranslation();

  return (
    <nav
      data-cy="nav"
      className={cn(
        {
          'items-center h-[100vh]': isBurgerMenuActive,
          'h-0': !isBurgerMenuActive,
        },
        `
          justify-start gap-6 sm:gap-8 sm:h-full flex box-border items-center text-sm
          text-black no-underline z-10 overflow-hidden flex-col sm:flex-row
          absolute top-12 left-0 right-0
          sm:static
          bg-white dark:bg-black
        `,
      )}
      style={{ transition: 'height .3s ease' }}
      role="navigation"
      aria-label="main navigation"
    >
      <div
        className={cn(
          {
            'h-5': isBurgerMenuActive,
            'h-0': !isBurgerMenuActive,
          },
          `
          transition-all duration-200
        `,
        )}
      ></div>
      <NavbarLink
        text={t('home')}
        link="/"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
      <NavbarLink
        text={t('phones')}
        link="/phones"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
      <NavbarLink
        text={t('tablets')}
        link="/tablets"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
      <NavbarLink
        text={t('accessories')}
        link="/accessories"
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
    </nav>
  );
};
