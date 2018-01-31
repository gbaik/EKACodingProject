import React from 'react';
import { Route, Switch } from 'react-router-dom';

import landingPage from './landingPage.js';

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <landingPage />
      </Route>          
    </Switch>
  </div>
);

export default Router;