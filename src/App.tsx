import { Outlet } from 'react-router-dom';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { useEffect } from 'react';
import cn from 'classnames';
import { useAuth } from './hooks/useAuth';
import { useCart } from 'react-use-cart';
import { pullCartFromServer } from './utils/pullCartFromServer';
import { LoaderProvider } from './context/LoaderProvider';
import { useBurgerMenu } from '@/hooks/useBurgerMenu.ts';

function App() {
  const { isBurgerMenuActive, setIsBurgerMenuActive } = useBurgerMenu();
  const { user } = useAuth();
  const { setItems } = useCart();

  useEffect(() => {
    if (!user?.id) return;

    const sync = async () => {
      const cartItems = await pullCartFromServer(user.id);
      setItems(cartItems ?? []);
      console.log('✅ Корзина підтягнута в App');
    };

    sync();
  }, [user?.id]);

  return (
    <LoaderProvider>
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
    </LoaderProvider>
  );
}

export default App;
