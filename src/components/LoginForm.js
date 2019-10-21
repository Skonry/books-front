import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { authenticateUser } from '../store/features/usersSlice';

function LoginForm({authenticateUser, history, isFormLoading}) {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => {
        authenticateUser(values, history.push);
      }}
      render={({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form onSubmit={handleSubmit} loading={isFormLoading}>
          <Form.Group style={{alignItems: "flex-end"}}>
            <Form.Input label="E-mail" name="email" value={values.email} onChange={handleChange} />
            <Form.Input type="password" label="Password" name="password" value={values.password} onChange={handleChange} />
            <Button type="submit" secondary style={{height: "38px"}}>Log in</Button>
          </Form.Group>
        </Form>
      )}
    />
  );
}

const mapStateToProps = state => ({
  isFormLoading: state.users.isLoginFormLoading
});

const mapDispatchToProps = {authenticateUser};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));