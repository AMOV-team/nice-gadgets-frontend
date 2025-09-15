import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type NavbarLinkProps = {
  text: string;
  link: string;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({ text, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        classNames(
          'relative font-mont leading-[48px] uppercase text-small tracking-[.04em] font-extrabold transition-colors duration-200 hover:text-custom-primary',
          isActive ?
            'text-custom-primary after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-custom-primary after:rounded-lg'
          : 'text-custom-secondary',
        )
      }
    >
      {text}
    </NavLink>
  );
};
