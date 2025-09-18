import React, { useState } from 'react';
import { Navbar } from '../NavBar/Navbar';
import { NavbarIconLink } from '../../atoms/link/NavbarIconLink';
import { Link } from 'react-router-dom';
import { ThemeImage } from '../../atoms/icons/ThemeImage';
import { ThemeSwitcher } from '../../atoms/buttons/ThemeSwitcher';
import { LangButton } from '../../atoms/buttons/LangButton';
import { FavouritesIconCounter } from '../../atoms/icons/FavouritesIconCounter';
import { ShoppingBagIconCounter } from '../../atoms/icons/ShoppingBagIconCounter';
import { CloseIcon } from '../../atoms/icons/CloseIcon';
import { BurgerMenuIcon } from '../../atoms/icons/BurgerMenuIcon';
import { useCart } from 'react-use-cart';
import { ShoppingBagIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isEmpty, totalItems } = useCart();

  return (
    <header className="flex items-center justify-between h-[48px] pl-4 border-b shadow-[0px_1px_0px_0px_hsl(var(--elements))] gap-8 bg-white dark:bg-black">
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="pt-[13px] pb-[13px]"
        >
          <ThemeImage
            light="img/logo-light-theme.png"
            dark="img/logo-dark-theme.png"
            alt="Nice gadgets"
            className="w-[64px] h-[22px] block"
          />
        </Link>
        <Navbar />
      </div>

      <a
        onClick={() => setIsOpen(!isOpen)}
        href="#"
        className="sm:hidden shadow-[-1px_0px_0px_0px_hsl(var(--elements))] p-4 inline-flex items-center gap-4 no-underline"
      >
        {isOpen ?
          <div className="size-[16px] flex justify-center items-center">
            <CloseIcon />
          </div>
        : <div className="size-[16px] flex justify-center items-center">
            <BurgerMenuIcon />
          </div>
        }
      </a>

      <div className="hidden sm:flex">
        <ThemeSwitcher />
        <LangButton />
        <NavbarIconLink link="/favorites">
          <div className="size-[16px] flex justify-center items-center">
            <FavouritesIconCounter className="text-custom-primary" />
          </div>
        </NavbarIconLink>
        <NavbarIconLink link="/cart">
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
    </header>
  );
};
