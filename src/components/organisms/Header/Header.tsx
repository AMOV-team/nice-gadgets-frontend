import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-[48px] pl-4 border-b shadow-[0px_1px_0px_0px_#E2E6E9] gap-8">
      <div className="flex gap-4 items-center">
        <a
          href="/"
          className="pt-[13px] pb-[13px]"
        >
          <img
            className="w-[64px] h-[22px]"
            src="img/header-logo.png"
            alt="Nice gadgets"
          />
        </a>

        <nav className="hidden sm:flex justify-start gap-8 h-full flex items-center text-sm text-black no-underline">
          <a
            href="#"
            className="h-full leading-[48px]"
          >
            Home
          </a>
          <a
            href="#"
            className="h-full leading-[48px]"
          >
            Products
          </a>
          <a
            href="#"
            className="h-full leading-[48px]"
          >
            Contact
          </a>
        </nav>
      </div>

      <a
        href="#"
        className="sm:hidden shadow-[-1px_0px_0px_0px_#E2E6E9] p-4 inline-flex items-center gap-4 no-underline"
      >
        <img
          className="w-[16px] h-[16px]"
          src="img/burger-menu.svg"
          alt=""
        />
      </a>

      <div className="hidden sm:flex">
        <a
          href="#"
          className="shadow-[-1px_0px_0px_0px_#E2E6E9] p-4 inline-flex items-center justify-center no-underline"
        >
          <img
            className="w-[16px] h-[16px]"
            src="img/favourites.svg"
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
