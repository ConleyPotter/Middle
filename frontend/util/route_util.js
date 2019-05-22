import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return loggedIn ? <Redirect to="/" /> : <Component {...props} />;
      }}
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

const msp = (state) => ({
  loggedIn: Boolean(state.session.current_user.id)
})

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected))