
import React, { useState } from 'react';
import { Navbar } from '../NavBar/Navbar';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-[48px] pl-4 border-b shadow-[0px_1px_0px_0px_#E2E6E9] gap-8">
      <div className="flex gap-4 items-center">
        <a
          href="/"
          className="pt-[13px] pb-[13px]"
        >
          <img
            className="w-[64px] h-[22px] block"
            src="img/header-logo.png"
            alt="Nice gadgets"
          />
        </a>
        <Navbar />
      </div>

      <a
        onClick={() => setIsOpen(!isOpen)}
        href="#"
        className="sm:hidden shadow-[-1px_0px_0px_0px_#E2E6E9] p-4 inline-flex items-center gap-4 no-underline"
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
        <a
          href="#"
          className="shadow-[-1px_0px_0px_0px_#E2E6E9] p-4 inline-flex items-center justify-center no-underline"
        >
          <img
            className="w-[16px] h-[16px]"
            src="/img/heart-outline.png"
            alt=""
          />
        </a>

        <a
          href="#"
          className="shadow-[-1px_0px_0px_0px_#E2E6E9] p-4 inline-flex items-center justify-center no-underline"
        >
          <img
            className="w-[16px] h-[16px]"
            src="img/shopping-bag.svg"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};
