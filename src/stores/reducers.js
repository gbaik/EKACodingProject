import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import AddressForm from './AddressForm/reducer.js';
import BasicInfoForm from './BasicInfoForm/reducer.js';
import LoginForm from './LoginForm/reducer.js';  

const reducers = combineReducers({
  form: formReducer,
  AddressForm,
  BasicInfoForm,
  LoginForm
})

export default reducers;