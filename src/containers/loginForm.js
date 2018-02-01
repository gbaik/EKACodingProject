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
      <input placeholder='enter new group name'
      type="text" {...field.input} />
    )
  };

  const onSubmit = (e) => {
    console.log(e);
    console.log(e.LoginForm);
    testActions.TEST();
  }

  return (
    <div>
      Username: <input type="text"></input>
      Password: <input type="text"></input>
      E-mail Address: <input type="text"></input>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name="LoginForm" component={ RenderField } />
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
