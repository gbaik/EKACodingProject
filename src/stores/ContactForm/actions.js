import axios from 'axios';

export const CREATE_CONTACT = function (firstName, lastName, telephone) {
  const request = axios.post('/loginForm/createContact', {
    firstName: firstName,
    lastName: lastName,
    telephone: telephone
  });
  return {
    type: CREATE_CONTACT,
    payload: {}
  };
}
