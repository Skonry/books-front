import React from 'react';
import { Card } from 'semantic-ui-react';
import BookCard from './BookCard';

function BookCardsGroup({books, shelves}) {
  return (
    <div>
      <Card.Group>
      {books.map((book, i) => 
        <BookCard book={book} key={i} shelves={shelves} />
      )}
      </Card.Group>
    </div>
  );
}

export default BookCardsGroup;