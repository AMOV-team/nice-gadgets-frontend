import React from 'react';
import { Navbar } from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import { ThemeImage } from '../../atoms/icons/ThemeImage';
import { BurgerMenu } from '../../atoms/BugerMenu/BurgerMenu.tsx';
import { HeaderButtons } from '../../atoms/HeaderButtons/HeaderButtons.tsx';

type Props = {
  isBurgerMenuActive: boolean;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const Header: React.FC<Props> = ({
  isBurgerMenuActive,
  handleIsBurgerMenuActive,
}) => {
  return (
    <header
      className={`
        relative flex items-center justify-between h-[48px] pl-4 border-b
        shadow-[0px_1px_0px_0px_hsl(var(--elements))]
        after:content-[""] after:absolute after:block after:top-0 after:w-full
        after:h-full after:bg-white after:z-20
      `}
    >
      <div className="flex gap-4 items-center z-30">
        <Link
          to="/"
          className="pt-[13px] pb-[13px] z-30"
        >
          <ThemeImage
            light="img/logo-light-theme.png"
            dark="img/logo-dark-theme.png"
            alt="Nice gadgets"
            className="w-[64px] h-[22px] block z-30"
          />
        </Link>
        <Navbar
          isBurgerMenuActive={isBurgerMenuActive}
          handleIsBurgerMenuActive={handleIsBurgerMenuActive}
        />
      </div>

      <button
        onClick={() => handleIsBurgerMenuActive(!isBurgerMenuActive)}
        className="sm:hidden shadow-[-1px_0px_0px_0px_hsl(var(--elements))] p-4 inline-flex items-center gap-4 no-underline"
      >
        <BurgerMenu isActive={isBurgerMenuActive} />
      </button>

      <HeaderButtons
        isBurgerMenuActive={isBurgerMenuActive}
        handleIsBurgerMenuActive={handleIsBurgerMenuActive}
      />
    </header>
  );
};
