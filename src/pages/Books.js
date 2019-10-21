import React, { useEffect } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation';
import BookCardsGroup from '../components/BookCardsGroup';
import { getBooks } from '../store/features/booksSlice';

function Books({books, getBooks, shelves}) {
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Grid>
      <Grid.Row>
        <Navigation activePage='books' />
      </Grid.Row>
      <Grid.Row>
        <p>Add book to service</p>
      </Grid.Row>
      <Grid.Row>
        <Button as={Link} to='/books/add-book' >Add</Button>
      </Grid.Row>
      <Grid.Row>
        <BookCardsGroup books={books} shelves={shelves} />
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = state => ({
  books: state.books.books,
  shelves: state.shelves.shelves
});

const mapDispatchToProps = {
  getBooks
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Books);