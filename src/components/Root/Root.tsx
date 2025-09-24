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
import { ScrollToTop } from '../organisms/ScrollToTop/ScrollToTop.tsx';
import { CartProvider } from 'react-use-cart';
import { ComparePage } from '../pages/ComparePage.tsx';
import { FavoritesProvider } from '../../context/FavoritesContext.tsx';
import { ComparisonProvider } from '../../context/ComparisonContext.tsx';
import { UserProfilePage } from '../pages/UserProfilePage.tsx';
import { Toaster } from '../ui/toaster.tsx';
import SignUpForm from '../organisms/SignUpForm/SignUpForm.tsx';
import SignInForm from '../organisms/SignInForm/SignInForm.tsx';
import { AuthProvider } from '@/context/AuthProvider.tsx';
import AuthCallback from '../pages/AuthCallback.tsx';
import { RightsPage } from '../pages/RightsPage.tsx';
import TidioChat from '../molecules/TidioChat/TidioChat.tsx';
import { BurgerMenuProvider } from '@/context/BurgerMenuProvider.tsx';

export const Root = () => (
  <AuthProvider>
    <FavoritesProvider>
      <ComparisonProvider>
        <CartProvider id="main-cart">
          <BurgerMenuProvider>
            <HashRouter>
              <TidioChat />
            <ScrollToTop />
            <Toaster />
            <Routes>
              <Route
                path="/"
                element={<App />}
              >
                <Route
                  path="auth-callback"
                  element={<AuthCallback />}
                />
                <Route
                  index
                  element={<HomePage />}

                />

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
                  <Route
                    path="userprofile"
                    element={<UserProfilePage />}
                  />
                  <Route
                    path="signup"
                    element={<SignUpForm />}
                  />
                  <Route
                    path="signin"
                    element={<SignInForm />}
                  />

                  <Route path="phones">
                    <Route
                      index
                      element={<PhonesPage />}
                    />
                    <Route
                      path=":slug"
                      element={<ItemCardPage category="phones" />}
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
                      element={<ItemCardPage category="tablets" />}
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
                      element={<ItemCardPage category="accessories" />}
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
                    path="compare"
                    element={<ComparePage />}
                  />
                  <Route
                    path="rights"
                    element={<RightsPage />}
                  />
                  <Route
                    path="*"
                    element={<PageNotFound />}
                  />
                </Route>
              </Routes>
            </HashRouter>
          </BurgerMenuProvider>
        </CartProvider>
      </ComparisonProvider>
    </FavoritesProvider>
  </AuthProvider>
);
