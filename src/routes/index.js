import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Load from '../components/Load';

const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/Auth/SignIn'));
const SignUp = lazy(() => import('../pages/Auth/SignUp'));

const Routes = () => {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <Suspense fallback={<Load />}>
      <Switch>
        {signed ? (
          <Route path="/" exact auth component={Main} />
        ) : (
          <>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </>
        )}
      </Switch>
    </Suspense>
  );
};

export default Routes;
