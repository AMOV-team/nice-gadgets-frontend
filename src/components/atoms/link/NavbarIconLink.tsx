import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  link: string;
  children: React.ReactNode;
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const NavbarIconLink: React.FC<Props> = ({
  link,
  children,
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
          'flex-1 relative w-12 h-12 xl:w-16 xl:h-16 inline-flex items-center justify-center no-underline z-30',
          isActive ?
            `
              after:content-[""]
              after:absolute
              after:left-0
              after:bottom-0
              after:w-[calc(100%)]
              after:h-[4px]
              after:bg-custom-primary
              after:rounded-lg
              bg-white dark:bg-black
            `
          : '',
        )
      }
    >
      {children}
    </NavLink>
  );
};
