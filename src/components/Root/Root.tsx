import { Routes, Route, Navigate } from 'react-router-dom';

import '../../App.css';

import { HashRouter } from 'react-router-dom';
import App from '../../App';
import { PageNotFound } from '../pages/PageNotFound';
import { HomePage } from '../pages/HomePage';
import { PhonesPage } from '../pages/PhonesPage';
import { FavoritesPage } from '../pages/FavoritesPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

        <Route path="phones">
          <Route
            index
            element={<PhonesPage />}
          />
          <Route
            path=":slug"
            element={<PhonesPage />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Route>
        <Route
          path="favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
