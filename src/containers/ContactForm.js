import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import * as contactFormActions from '../stores/ContactForm/actions';

const ContactForm = ({ handleSubmit }) => {
  const RenderField = (field) => {
    const { meta: { touched, error, warning }} = field; 

    return (
      <input type="text" {...field.input} />
    )
  };

  const onSubmit = (event) => {
    const firstName = event.firstName;
    const lastName = event.lastName;
    const telephone = event.telephone;

    contactFormActions.CREATE_CONTACT(firstName, lastName, telephone);
  }
  
  return (
  <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      First Name: <Field name="firstName" component={ RenderField } />
      Last Name: <Field name="lastName" component={ RenderField } />
      Telephone: <Field name="telephone" component={ RenderField } />
      <button type='submit'>Save</button>
    </form>
    <Link to='addressForm'>Next (send to addressForm)</Link>
  </div>
  )
}

export default reduxForm({
  form: 'ContactForm'
})(ContactForm);