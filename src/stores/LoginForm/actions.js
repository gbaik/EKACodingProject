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
