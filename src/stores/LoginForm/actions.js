import axios from 'axios';

export const CREATE_LOGIN = function (username, password, email) {
  const request = axios.post('/loginForm/createLogin', {
    username: username,
    password: password,
    email: email
  });
  return {
    type: CREATE_LOGIN,
    payload: {}
  };
}

export const UPDATE_CURRENT_EMAIL = function (email, dispatch) {
  try {
    dispatch({
      type: UPDATE_CURRENT_EMAIL,
      payload: email
    });
  } catch (error) {
    return console.error(error);
  }
}