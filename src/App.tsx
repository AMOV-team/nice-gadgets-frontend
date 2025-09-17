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
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
