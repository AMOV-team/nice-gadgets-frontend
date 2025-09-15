import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  imgUrl: string;
  link: string;
};

export const NavbarIconLink: React.FC<Props> = ({ imgUrl, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        classNames(
          'relative shadow-[-1px_0px_0px_0px_hsl(var(--elements))] p-4 inline-flex items-center justify-center no-underline',
          isActive ?
            'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] after:bg-custom-primary after:rounded-lg'
          : '',
        )
      }
    >
      <img
        className="w-[16px] h-[16px]"
        src={imgUrl}
        alt=""
      />
    </NavLink>
  );
};
