import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Load from '../components/Load';
import Route from './Route';

const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/Auth/SignIn'));
const SignUp = lazy(() => import('../pages/Auth/SignUp'));

const Routes = () => (
  <Suspense fallback={<Load />}>
    <Switch>
      <Route path="/" exact auth component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Suspense>
);

export default Routes;
