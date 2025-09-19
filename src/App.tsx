import { Outlet } from 'react-router-dom';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';
import { useState } from 'react';
import cn from 'classnames';

function App() {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  return (
    <div
      data-cy="app"
      className={cn(
        {
          'max-h-[100vh]': isBurgerMenuActive,
        },
        'flex flex-col min-h-screen overflow-hidden',
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
}

export default App;
