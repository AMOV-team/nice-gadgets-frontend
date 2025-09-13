import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <>
      <div data-cy="app">
        <Header />

        <main className="section">
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
    </>
  );
}

export default App;
