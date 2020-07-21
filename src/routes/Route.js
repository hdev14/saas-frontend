import React from 'react';
import { Route as R, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store';

function Route({ auth, component: Component, ...rest }) {
  const signed = false;

  return (
    <R
      {...rest}
      render={(props) => {
        if (!signed && auth) {
          return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />;
        }

        if (signed && !auth) {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

Route.defaultProps = {
  auth: false,
};

Route.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default Route;
