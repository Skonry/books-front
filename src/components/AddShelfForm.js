import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addShelf } from '../store/features/shelvesSlice';

function AddShelfForm({addShelf, history, isFormLoading}) {
  return (
    <Formik
      initialValues={{name: ''}}
      onSubmit={(values) => {
        addShelf(values, history.push);
      }}
      render={({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form onSubmit={handleSubmit} loading={isFormLoading}>
          <Form.Input label="Name" name="name" value={values.name} onChange={handleChange} />
          <Button primary type="submit">Add shelf</Button>
        </Form>
      )}
    />
  );
}

const mapStateToProps = state => ({
  isFormLoading: state.shelves.isAddBookFormLoading
});

const mapDispatchToProps = {
  addShelf
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShelfForm));