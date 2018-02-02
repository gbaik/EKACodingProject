import axios from 'axios';

export const CREATE_LOGIN = function (username, password, email, dispatch) {
  axios.post('/loginForm/createLogin', {
    username: username,
    password: password,
    email: email
  });

  try {
    dispatch({
      type: CREATE_LOGIN,
      payload: email
    });
  } catch (err) {
    throw err
  }
}