import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { registerUser } from '../store/features/usersSlice';

function RegistrationForm({history, isFormLoading, registerUser}) {
  return (
    <Formik
      initialValues={{email: '', login: '', password: ''}}
      onSubmit={(values) => {
        registerUser(values, history.push);
      }}
      render={({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form onSubmit={handleSubmit} loading={isFormLoading}>
          <Form.Input label="Login" name="login" value={values.login} onChange={handleChange} />
          <Form.Input label="E-mail" name="email" value={values.email} onChange={handleChange} />
          <Form.Input type="password" label="Password" name="password" value={values.password} onChange={handleChange} />
          <Button type="submit" primary>Sign up</Button>
        </Form>
      )}
    />
  )
}

const mapStateToProps = state => ({
  isFormLoading: state.users.isRegistrationFormLoading
});

const mapDispatchToProps = {
  registerUser
};



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm));