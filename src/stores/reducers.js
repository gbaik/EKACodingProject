import { combineReducers } from "redux"

import addressForm from './addressForm/reducer.js';
import basicInfoForm from './basicInfoForm/reducer.js';
import loginForm from './loginForm/reducer.js';  

// const reducers = combineReducers({
//   addressForm,
//   basicInfoForm,
//   loginForm
// })

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const reducers  =  (state=initialState, action) => {

}

export default reducers;