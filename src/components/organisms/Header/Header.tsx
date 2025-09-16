import React, { useState } from 'react';
import { Navbar } from '../NavBar/Navbar';
import { NavbarIconLink } from '../../atoms/link/NavbarIconLink';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-[48px] pl-4 border-b shadow-[0px_1px_0px_0px_hsl(var(--elements))] gap-8">
      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="pt-[13px] pb-[13px]"
        >
          <img
            className="w-[64px] h-[22px] block"
            src="img/header-logo.png"
            alt="Nice gadgets"
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
          <img
            className="w-[16px] h-[16px]"
            src="img/burger-menu-close.svg"
            alt="close"
          />
        : <img
            className="w-[16px] h-[16px]"
            src="img/burger-menu.svg"
            alt="menu"
          />
        }
      </a>

      <div className="hidden sm:flex">
        <NavbarIconLink
          imgUrl="img/heart-outline.png"
          link="/favorites"
        />
        <NavbarIconLink
          imgUrl="img/shopping-bag.svg"
          link="/cart"
        />
        {/* <a
          href="#"
          className="shadow-[-1px_0px_0px_0px_hsl(var(--elements))] p-4 inline-flex items-center justify-center no-underline"
        >
          <img
            className="w-[16px] h-[16px]"
            src="/img/heart-outline.png"
            alt=""
          />
        </a>

        <a
          href="#"
          className="shadow-[-1px_0px_0px_0px_hsl(var(--elements))] p-4 inline-flex items-center justify-center no-underline"
        >
          <img
            className="w-[16px] h-[16px]"
            src="img/shopping-bag.svg"
            alt=""
          />
        </a> */}
      </div>
    </header>
  );
};
