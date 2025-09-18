import { Outlet } from 'react-router-dom';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';

function App() {
  return (
    <div
      data-cy="app"
      className="flex flex-col min-h-screen"
    >
      <Header />
      <div className="bg-hover dark:bg-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
