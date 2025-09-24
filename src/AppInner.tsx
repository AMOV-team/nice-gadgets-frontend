import cn from 'classnames';
import { Header } from '@/components/organisms/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/organisms/Footer';
import { useBurgerMenu } from '@/hooks/useBurgerMenu.ts';

export const AppInner = () => {
  const { isBurgerMenuActive, setIsBurgerMenuActive } = useBurgerMenu();

  return (
    <div
      data-cy="app"
      className={cn(
        {
          'max-h-[100vh] overflow-y-hidden': isBurgerMenuActive,
        },
        'flex flex-col min-h-screen',
      )}
    >
      <Header
        isBurgerMenuActive={isBurgerMenuActive}
        handleIsBurgerMenuActive={setIsBurgerMenuActive}
      />
      <div className="bg-hover dark:bg-black flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
