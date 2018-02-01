import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const loginForm = () => (
  <div>
    Username: <input type="text"></input>
    Password: <input type="text"></input>
    E-mail Address: <input type="text"></input>
    <Link to='basicInfoForm'>SAVE (send to basicInfoForm)</Link>
  </div>
)

export default loginForm;
