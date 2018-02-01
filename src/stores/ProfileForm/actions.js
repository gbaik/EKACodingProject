import axios from 'axios';

export const CREATE_ADDRESS = function (address, city, state, zipcode) {
  const request = axios.post('/loginForm/createProfile', {
    address: address,
    city: city,
    state: state,
    zipcode: zipcode
  });
  return {
    type: CREATE_ADDRESS,
    payload: {}
  };
}

export const CREATE_CONTACT = function (firstName, lastName, telephone) {
  const request = axios.post('/loginForm/createProfile', {
    firstName: firstName,
    lastName: lastName,
    telephone: telephone
  });
  return {
    type: CREATE_CONTACT,
    payload: {}
  };
}
