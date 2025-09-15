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
      <main className="flex-1 section">
        <div className="container">
          <div className="block">
            <div className="box table-container">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
