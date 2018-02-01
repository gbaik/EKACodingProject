import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import * as testActions from '../stores/LoginForm/actions';

const LoginForm = () => {
  const RenderField = () => (<input type="text"></input>);

  return (
    <div>
      Username: <input type="text"></input>
      Password: <input type="text"></input>
      E-mail Address: <input type="text" onChange={testActions.test()}></input>
      <form onSubmit={() => console.log('hello')}>
        <Field name="channelName" component={ RenderField } />
        <button type='submit'>Create Channel</button>
      </form>
      <Link to='basicInfoForm'>SAVE (send to basicInfoForm)</Link>
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
