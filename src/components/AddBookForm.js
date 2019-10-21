import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addNewBook } from '../store/features/booksSlice';

function AddBookForm({addNewBook, history, isFormLoading}) {
  return (
    <Formik
      initialValues={{title: '', author: ''}}
      onSubmit={(values) => {
        addNewBook(values, history.push);
      }}
      render={({
        handleChange,
        handleSubmit,
        values
      }) => (
        <Form onSubmit={handleSubmit} loading={isFormLoading}>
          <Form.Input label="Title" name="title" value={values.title} onChange={handleChange} />
          <Form.Input label="Author" name="author" value={values.author} onChange={handleChange} />
          <Button primary type="submit">Add book</Button>
        </Form>
      )}
    />
  );
}

const mapStateToProps = state => ({
  isFormLoading: state.books.isAddBookFormLoading
});

const mapDispatchToProps = {addNewBook};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookForm));