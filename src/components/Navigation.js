import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navigation({activeItem}) {
  return (
    <Menu>
      <Menu.Item 
        name='my-library' 
        active={activeItem === 'my-library'} 
        as={Link} 
        to='/library'
      >
        My Library
      </Menu.Item>
      <Menu.Item 
        name='books' 
        active={activeItem === 'books'} 
        as={Link} 
        to='/books'
      >
        Books
      </Menu.Item>
      <Menu.Item 
        name='add-book' 
        active={activeItem === 'add-book'} 
        as={Link} 
        to='/books/add-book'
      >
        Add book
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;