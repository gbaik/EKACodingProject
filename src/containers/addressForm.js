import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const AddressForm = () => (
  <div>
    Address: <input type="text"></input>
    City: <input type="text"></input>
    State: <input type="text"></input>
    Zipcode: <input type="text"></input>
    <Link to=''>SAVE (send to landingPage)</Link>
  </div>
)

export default AddressForm;
