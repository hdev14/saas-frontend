import React from 'react';
import { Route as ReactRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store';

const Route = ({ auth, component: Component, ...rest }) => {
  const { signed } = store.getState().auth;

  if (!signed && auth) {
    return <Redirect to="/signin" />;
  }

  if (signed && !auth) {
    return <Redirect to="/" />;
  }

  return (
    <ReactRoute
      {...rest}
      render={(props) => (
        <Component {...props} />
      )}
    />
  );
};

Route.defaultProps = {
  auth: false,
};

Route.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
};

export default Route;
