import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import * as loginFormActions from '../stores/LoginForm/actions';

const LoginForm = ({ handleSubmit, dispatch }) => {
  const RenderField = (field) => {
    const { meta: { touched, error, warning }} = field; 

    return (
      <input type="text" {...field.input} />
    )
  };

  const onSubmit = (event) => {
    const username = event.username;
    const password = event.password;
    const email = event.email;

    loginFormActions.UPDATE_CURRENT_EMAIL(email, dispatch);
    loginFormActions.CREATE_LOGIN(username, password, email);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        Username: <Field name="username" component={ RenderField } />
        Password: <Field name="password" component={ RenderField } />
        E-mail Address: <Field name="email" component={ RenderField } />        
        <button type='submit'>Save</button>
      </form>
      <Link to='contactForm'>Next (send to contactForm)</Link>
    </div>
  )
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);
