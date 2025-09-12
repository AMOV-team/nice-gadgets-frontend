import 'bulma/css/bulma.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { HashRouter } from 'react-router-dom';
import App from '../../App';
import { PageNotFound } from '../../pages/PageNotFound';
import { HomePage } from '../../pages/HomePage';
import { PhonesPage } from '../../pages/PhonesPage';

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
          path="*"
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
