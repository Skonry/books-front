import React, { useEffect } from 'react';
import { Button, Header, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import BookCardsGroup from '../components/BookCardsGroup';
import DropdownSelection from '../components/DropdownSelection';
import { getUserBooks } from '../store/features/userBooksSlice';
import { getShelves } from '../store/features/shelvesSlice';

function Library({books, getShelves, getUserBooks, shelves}) {
  useEffect(() => {
    getUserBooks();
    getShelves();
  }, []);
  return (
    <Grid>
      <Grid.Row>
        <Navigation activePage='mylibrary' />
      </Grid.Row>
      <Grid.Row>
        <Header as='h1'>My library</Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <DropdownSelection items={shelves} />
        </Grid.Column>
        <Grid.Column>
          <Button secondary as={Link} to='/library/shelves/add-shelf'>Add shelf</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {books.length === 0 ?
          'No books' :
          (<BookCardsGroup books={books}/>)
        }
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = state => ({
  books: state.userBooks.books,
  shelves: state.shelves.shelves
});

const mapDispatchToProps = {
  getUserBooks,
  getShelves
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Library);