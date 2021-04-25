import React, { useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes';
import Container from './components/Container';
import AppBars from './components/AppBar';
import autOps from './redux/auth/auth-operation';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from 'react-loader-spinner';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autOps.getCurrentUserInfo());
  }, [dispatch]);

  return (
    <div className="App">
      <Container>
        <AppBars />
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <PublicRoute
              restricted
              redirectTo={routes.contacts}
              path={routes.register}
            >
              <RegisterView />
            </PublicRoute>
            <PublicRoute
              restricted
              redirectTo={routes.contacts}
              path={routes.login}
            >
              <LoginView />
            </PublicRoute>
            <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}
