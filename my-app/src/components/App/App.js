import AppBar from "../AppBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import operations from "../../redux/auth/auth-operations";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivatRoute";
import { Loader } from "../Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import("../../views/RegisterView" /* webpackChunkName: "register-view" */)
);
const LoginView = lazy(() =>
  import("../../views/LoginView" /* webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import("../../views/ContactsView" /* webpackChunkName: "contacts-view" */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          {
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}
