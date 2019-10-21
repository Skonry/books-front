import React from 'react';
import { Card, Dropdown, Image } from 'semantic-ui-react';

import bookImage from '../images/book.svg';

function BookCard({book, shelves}) {
  return (
    <Card>
      <Image src={bookImage} />
      <Card.Content>
        <Card.Header>
          {book.title}, {book.author}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <p>Add book to your library</p>
        <Dropdown fluid placeholder="Choose shelf" >
          <Dropdown.Menu>
            {shelves.map((shelf, index) => (
              <Dropdown.Item key={index} text={shelf.name} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Content>
    </Card>
  );
}

export default BookCard;