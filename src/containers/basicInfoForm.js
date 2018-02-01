import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const BasicInfoForm = () => (
  <div>
    First Name: <input type="text"></input>
    Last Name: <input type="text"></input>
    Telephone: <input type="text"></input>
    <Link to='addressForm'>SAVE (send to addressForm)</Link>
  </div>
)

export default BasicInfoForm;
