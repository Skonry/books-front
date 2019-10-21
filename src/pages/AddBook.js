import React from 'react';
import { Grid } from 'semantic-ui-react';

import Navigation from '../components/Navigation';
import AddBookForm from '../components/AddBookForm';

function AddBook() {
  return (
    <Grid>
      <Grid.Row>
        <Navigation activePage='add-book' />
      </Grid.Row>
      <Grid.Row>
        <AddBookForm />
      </Grid.Row>
    </Grid>
  );
}

export default AddBook;