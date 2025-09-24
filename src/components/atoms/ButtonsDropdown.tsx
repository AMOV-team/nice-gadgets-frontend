import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { ThemeSwitcher } from '@/components/atoms/buttons/ThemeSwitcher.tsx';
import { LangButton } from '@/components/atoms/buttons/LangButton.tsx';
import { Settings } from 'lucide-react';

type Props = {
  handleIsBurgerMenuActive: (state: boolean) => void;
};

export const ButtonsDropdown: React.FC<Props> = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth >= 720);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return isWide ?
      <Menu
        as="div"
        className="relative inline-block"
      >
        <MenuButton
          className={`
            h-12 xl:h-16 w-12 xl:w-16 justify-center
            bg-white dark:bg-black
            flex items-center
            box-border shadow-none
            min-720:shadow-[-1px_0px_0px_0px_hsl(var(--elements))]
            cursor-pointer
            focus:outline-none focus:ring-0 focus-visible:ring-0
          `}
        >
          <Settings className="text-custom-primary size-[16px]" />
        </MenuButton>

        <MenuItems
          className={`
            translate-y-[1px]
            absolute right-0 z-10 origin-top-right w-12 xl:w-16 flex flex-col items-center
            focus:outline-none focus:ring-0 focus-visible:ring-0
            bg-white dark:bg-black
            
          `}
        >
          <div>
            <MenuItem as="div">
              <div
                className="w-full shadow-none min-720:shadow-[-1px_-1px_0_0_hsl(var(--elements))]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <LangButton />
              </div>
            </MenuItem>

            <MenuItem as="div">
              <div
                className="w-full shadow-none min-720:shadow-[-1px_-1px_0_0_hsl(var(--elements)),_-1px_1px_0_0_hsl(var(--elements))]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ThemeSwitcher />
              </div>
            </MenuItem>
            <MenuItem as="div"></MenuItem>
          </div>
        </MenuItems>
      </Menu>
    : <>
        <LangButton />
        <ThemeSwitcher />
      </>;
};
