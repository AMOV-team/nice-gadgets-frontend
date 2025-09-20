import { Outlet } from 'react-router-dom';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { useState } from 'react';
import cn from 'classnames';
import { FadeLoader } from 'react-spinners';
import { useLoader } from '@/hooks/useLoader.ts';

function App() {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  const { isLoading } = useLoader();

  return isLoading ?
      <div
        className={`
      inset-0 z-50
      flex items-center justify-center h-screen backdrop-blur-md bg-white/20
      border border-white/30 shadow-lg rounded-xl p-6`}
      >
        <FadeLoader
          color={'#4219D0'}
          loading={true}
        />
      </div>
    : <div
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
      </div>;
}

export default App;
