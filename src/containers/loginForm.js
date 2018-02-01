import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import * as testActions from '../stores/LoginForm/actions';

const LoginForm = ({ handleSubmit }) => {
  const RenderField = (field) => {
    const { meta: { touched, error, warning }} = field; 

    return (
      <input type="text" {...field.input} />
    )
  };

  const onSubmit = (e) => {
    console.log(e);
    console.log(e.LoginForm);
    testActions.TEST();
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

const mapStateToProps = function(state) {
  return { 
    testState: state.testState
  };
};

export default reduxForm({
  form: 'LoginForm'
})(connect(mapStateToProps)(LoginForm));
