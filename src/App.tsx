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
      {/* <main className="flex-1 section px-4 md:px-6 lg:px-8 xl:px-16 py-6 md:py-8 lg:py-14 mx-auto"> */}
      {/* <div className="grid grid-cols-4 sm:grid-cols-12 [@media(min-width:988px)]:grid-cols-18 xl:grid-cols-24 gap-x-4 gap-y-[40px] max-w-[1280px]"> */}
      <Outlet />
      {/* </div> */}
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default App;
