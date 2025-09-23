import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { UserCabinetIcon } from '@/components/atoms/icons/UserCabinetIcon.tsx';
import { NavbarIconLink } from '@/components/atoms/link/NavbarIconLink.tsx';
import { ThemeSwitcher } from '@/components/atoms/buttons/ThemeSwitcher.tsx';
import { LangButton } from '@/components/atoms/buttons/LangButton.tsx';
import { useAuth } from '@/hooks/useAuth.ts';

type Props = {
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const ButtonsDropdown: React.FC<Props> = ({
  handleIsBurgerMenuActive,
}) => {
  const { user } = useAuth();
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth >= 640); // 640px = sm
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return isWide ?
      <Menu
        as="div"
        className="relative inline-block "
      >
        <MenuButton
          className={`
          h-12 xl:h-16 w-12 xl:w-16 justify-center
          bg-white dark:bg-black
          flex items-center
          shadow-[-1px_0px_0px_0px_hsl(var(--elements))]
          cursor-pointer
        `}
        >
          <svg
            className={`
            w-6 h-6 fill-black dark:fill-white
          `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
          </svg>
        </MenuButton>

        <MenuItems
          transition
          className={`
          absolute right-0 z-10 origin-top-right w-12 xl:w-16 flex flex-col items-center
          bg-white dark:bg-black outline-1 -outline-offset-1 outline-white/10 transition
          data-closed:scale-95 data-closed:transform data-closed:opacity-0
          data-enter:duration-100 data-enter:ease-out data-leave:duration-75
          data-leave:ease-in
        `}
        >
          <div>
            <MenuItem as="div">
              <div
                className="border border-[hsl(var(--elements))] w-full"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <LangButton />
              </div>
            </MenuItem>

            <MenuItem as="div">
              <div
                className="border border-[hsl(var(--elements))] w-full"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ThemeSwitcher />
              </div>
            </MenuItem>
            <MenuItem as="div">
              <div className="h-12 xl:h-16 w-12 xl:w-16 shadow-[-1px_0_0_0_hsl(var(--elements)),0_1px_0_0_hsl(var(--elements))]">
                <NavbarIconLink
                  handleIsBurgerMenuActive={handleIsBurgerMenuActive}
                  link={user ? '/userprofile' : '/signin'}
                >
                  <div className="h-full flex justify-center items-center bg-white dark:bg-black">
                    <UserCabinetIcon />
                  </div>
                </NavbarIconLink>
              </div>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    : <>
        <LangButton />
        <ThemeSwitcher />
        <NavbarIconLink
          handleIsBurgerMenuActive={handleIsBurgerMenuActive}
          link={user ? '/userprofile' : '/signin'}
        >
          <div className="h-full flex justify-center items-center bg-white dark:bg-black">
            <UserCabinetIcon />
          </div>
        </NavbarIconLink>
      </>;
};
