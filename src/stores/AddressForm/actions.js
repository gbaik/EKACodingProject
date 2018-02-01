import axios from 'axios';

export const CREATE_ADDRESS = function (address, city, state, zipcode) {
  const request = axios.post('/loginForm/createAddress', {
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
