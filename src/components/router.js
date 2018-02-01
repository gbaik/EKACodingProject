import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landingPage';

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>          
    </Switch>
  </div>
);

export default Router;