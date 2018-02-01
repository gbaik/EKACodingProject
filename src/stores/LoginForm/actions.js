import axios from 'axios';

export const CREATE_CONTACT = function (username, password, email) {
  const request = axios.post('/loginForm/createContact', {
    username: username,
    password: password,
    email: email
  });
  return {
    type: CREATE_CONTACT,
    payload: {}
  };
}
