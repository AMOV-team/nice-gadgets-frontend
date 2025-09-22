import React from 'react';
import cn from 'classnames';

type Props = {
  isActive: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ isActive }) => {
  return (
    <div
      className={cn(
        {},
        `
          flex flex-col gap-[2px] w-4 h-4 relative cursor-pointer
          justify-center items-center z-30
        `,
      )}
    >
      <span
        className={cn(
          {
            '-rotate-45 translate-y-[3.5px]': isActive,
          },
          `
            h-[1.5px] w-[14px] bg-custom-primary block rounded mx-auto
            transition-all duration-200
            origin-center
          `,
        )}
      ></span>
      <span
        className={cn(
          {
            'opacity-0': isActive,
          },
          `
            h-[1.5px] w-[14px] bg-custom-primary block rounded
          `,
        )}
      ></span>
      <span
        className={cn(
          {
            'rotate-45 -translate-y-[3.5px]': isActive,
          },
          `
            h-[1.5px] w-[14px] bg-custom-primary block rounded mx-auto
            transition-all duration-200
            origin-center
          `,
        )}
      ></span>
    </div>
  );
};
