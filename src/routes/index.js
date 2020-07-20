import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Load from '../components/Load';

const Main = lazy(() => import('../pages/Main'));
const SignIn = lazy(() => import('../pages/Auth/SignIn'));
const SignUp = lazy(() => import('../pages/Auth/SignUp'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Load />}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
