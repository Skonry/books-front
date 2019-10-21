import React from 'react';
import { Grid } from 'semantic-ui-react';

import Navigation from '../components/Navigation';
import AddShelfForm from '../components/AddShelfForm';

function AddShelf() {
  return (
    <Grid>
      <Grid.Row>
        <Navigation activePage='add-shelf' />
      </Grid.Row>
      <Grid.Row>
        <p>Add shelf to your library</p>
      </Grid.Row>
      <Grid.Row>
        <AddShelfForm />
      </Grid.Row>
    </Grid>
  );
}

export default AddShelf;