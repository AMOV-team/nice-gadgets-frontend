import { Routes, Route, Navigate } from 'react-router-dom';

import '../../App.css';

import { HashRouter } from 'react-router-dom';
import App from '../../App';
import { PageNotFound } from '../pages/PageNotFound';
import { HomePage } from '../pages/HomePage';
import { PhonesPage } from '../pages/PhonesPage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { CartPage } from '../pages/CartPage';
import { TabletsPage } from '../pages/TabletsPage';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { ItemCardPage } from '../pages/ItemCardPage.tsx';
import { ContactsPage } from '../pages/ContactsPage';


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
        <Route path="tablets">
          <Route
            index
            element={<TabletsPage />}
          />
          <Route
            path=":slug"
            element={<TabletsPage />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Route>
        <Route path="accessories">
          <Route
            index
            element={<AccessoriesPage />}
          />
          <Route
            path=":slug"
            element={<AccessoriesPage />}
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
          path="cart"
          element={<CartPage />}
        />
        <Route
          path="contacts"
          element={<ContactsPage />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
        <Route
          path="products/:category/:slug"
          element={<ItemCardPage />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
