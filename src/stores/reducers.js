import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form';

import ProfileForm from './ProfileForm/reducer.js';
import LoginForm from './LoginForm/reducer.js';  

const reducers = combineReducers({
  form: formReducer,
  ProfileForm,
  LoginForm
})

export default reducers;