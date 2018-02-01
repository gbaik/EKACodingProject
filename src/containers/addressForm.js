import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import * as addressFormActions from '../stores/ProfileForm/actions';

const AddressForm = ({ handleSubmit }) => {
  const RenderField = (field) => {
    const { meta: { touched, error, warning }} = field; 

    return (
      <input type="text" {...field.input} />
    )
  };

  const onSubmit = (event) => {
    const address = event.address;
    const city = event.city;
    const state = event.state;
    const zipcode = event.zipcode;
    
    addressFormActions.CREATE_ADDRESS(address, city, state, zipcode);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        Address: <Field name="address" component={ RenderField } />
        City: <Field name="city" component={ RenderField } />
        State: <Field name="state" component={ RenderField } />
        Zipcode: <Field name="zipcode" component={ RenderField } />
        <button type='submit'>Save</button>
      </form>
      <Link to=''>Next (send to landingPage)</Link>
    </div>
  )
}

export default reduxForm({
  form: 'AddressForm'
})(AddressForm);
