import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

type NavbarLinkProps = {
  text: string;
  link: string;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  text,
  link,
  handleIsBurgerMenuActive,
}) => {
  const navigate = useNavigate();

  return (
    <NavLink
      to={link}
      onClick={(e) => {
        e.preventDefault();
        handleIsBurgerMenuActive(false);
        navigate(link);
      }}
      className={({ isActive }) =>
        classNames(
          'relative xl:leading-[64px] sm:leading-[48px] leading-[30px] uppercase text-small tracking-[.04em] font-extrabold transition-colors duration-200 hover:text-custom-primary',
          isActive ?
            'text-custom-primary after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-custom-primary after:rounded-lg'
          : 'text-custom-secondary',
        )
      }
    >
      {text}
    </NavLink>
  );
};
