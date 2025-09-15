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

      <main className="flex-1 section px-4 md:px-6 lg:px-8 xl:px-16 py-6 md:py-8 lg:py-14 mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
