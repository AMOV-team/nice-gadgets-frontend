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
          'font-mont uppercase text-small tracking-[.04em] font-bold transition-colors duration-200',
          isActive ? 'text-primary' : 'text-secondary',
        )
      }
    >
      {text}
    </NavLink>
  );
};
