import { combineReducers } from "redux"

import AddressForm from './AddressForm/reducer.js';
import BasicInfoForm from './BasicInfoForm/reducer.js';
import LoginForm from './LoginForm/reducer.js';  

const reducers = combineReducers({
  AddressForm,
  BasicInfoForm,
  LoginForm
})

export default reducers;