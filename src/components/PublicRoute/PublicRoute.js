import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isAuth = useSelector(authSelectors.getIsAuth);
  return (
    <Route {...routeProps}>
      {isAuth && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
