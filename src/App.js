import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from './pages/Home';
import Library from './pages/Library';
import Shelf from './pages/Shelf';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import AddShelf from './pages/AddShelf';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/library" component={Library}></Route>
          <Route path="/library/shelves/add-shelf" component={AddShelf}></Route>
          <Route path="/library/shelves/:name" component={Shelf}></Route>
          <Route exact path="/books" component={Books}></Route>
          <Route exact path="/books/add-book" component={AddBook}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
