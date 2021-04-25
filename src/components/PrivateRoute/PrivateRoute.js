import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  children,
  ...routeProps
}) {
  const token = useSelector(authSelectors.getToken);
  return (
    <Route {...routeProps}>
      {token ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
