import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between h-[48px] border-b-1 shadow-[0px_1px_0px_0px_#E2E6E9]">
      <a
        href="/"
        className="pl-4 pr-4 pt-[13px] pb-[13px]"
      >
        <img
          className="w-[64px] h-[22px]"
          src="img/header-logo.png"
          alt="Nice gadgets"
        />
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <a
          href="#"
          className="hover:text-gray-500"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-gray-500"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-gray-500"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
