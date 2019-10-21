import { combineReducers } from 'redux';
import { configureStore } from 'redux-starter-kit';

import usersReducer from './features/usersSlice';
import userBooksReducer from './features/userBooksSlice';
import shelvesReducer from './features/shelvesSlice';
import booksReducer from './features/booksSlice';


const rootReducer = combineReducers({
  books: booksReducer,
  users: usersReducer,
  userBooks: userBooksReducer,
  shelves: shelvesReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;