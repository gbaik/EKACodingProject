import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddressForm from '../containers/AddressForm';
import BasicInfoForm from '../containers/BasicInfoForm';
import LandingPage from './LandingPage.js';
import LoginForm from '../containers/LoginForm';


const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path = '/loginForm' component = {LoginForm}/>        
      <Route path = '/basicInfoForm' component = {BasicInfoForm}/>
      <Route path = '/addressForm' component = {AddressForm}/> 
    </Switch>
  </div>
);

export default Router;
