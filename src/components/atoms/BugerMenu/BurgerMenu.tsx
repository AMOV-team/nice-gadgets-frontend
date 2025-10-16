import React from 'react';
import cn from 'classnames';

type Props = {
  isActive: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ isActive }) => {
  return (
    <div
      className="
        flex flex-col gap-[2px] w-6 h-6 relative cursor-pointer
        justify-center items-center z-30
      "
    >
      <span
        className={cn(
          'h-[2px] w-[14px] bg-custom-primary block rounded transition-all duration-300 origin-center',
          {
            '-rotate-45 translate-y-[6px]': isActive,
          },
        )}
      ></span>
      <span
        className={cn(
          'h-[2px] w-[14px] bg-custom-primary block rounded transition-all duration-300',
          {
            'opacity-0': isActive,
          },
        )}
      ></span>
      <span
        className={cn(
          'h-[2px] w-[14px] bg-custom-primary block rounded transition-all duration-300 origin-center',
          {
            'rotate-45 -translate-y-[2px]': isActive,
          },
        )}
      ></span>
    </div>
  );
};
