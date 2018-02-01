import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import AddressForm from './AddressForm/reducer.js';
import ContactForm from './ContactForm/reducer.js';
import LoginForm from './LoginForm/reducer.js';  

const reducers = combineReducers({
  form: formReducer,
  AddressForm,
  ContactForm,
  LoginForm
})

export default reducers;