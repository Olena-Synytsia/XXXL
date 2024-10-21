import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { Suspense, lazy } from "react";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import Loader from "./components/Loader/Loader.jsx";

import "./App.css";

const Layout = lazy(() => import("./components/Layout/Layout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? null : (
    <Suspense
      fallback={
        <h2>
          <Loader />
        </h2>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
