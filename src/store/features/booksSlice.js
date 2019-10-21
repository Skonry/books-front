import axios from 'axios';
import { createSlice } from 'redux-starter-kit';

const booksSlice = createSlice({
  slice: 'books',
  initialState: {
    books: [],
    isAddBookFormLoading: false,
    isBooksLoading: false
  },
  reducers: {
    submitAddBookForm(state) {
      state.isAddBookFormLoading = true;
    },
    addedBook(state) {
      state.isAddBookFormLoading = false;
    },
    requestBooks(state) {
      state.isBooksLoading = true;
    },
    receiveBooks(state, action) {
      state.isBooksLoading = false;
      state.books = action.payload;
    }
  }
});

export const addNewBook = (book, redirect) => {
    return dispatch => {
      dispatch(booksSlice.actions.submitAddBookForm());
      return axios.post('http://localhost:3001/books', book)
        .then(response => {
          dispatch(booksSlice.actions.addedBook(response.data));
          redirect('/books');
        });
    }
}

export const getBooks = () => {
  return dispatch => {
    dispatch(booksSlice.actions.requestBooks());
    return axios.get('http://localhost:3001/books')
      .then(response => {
        dispatch(booksSlice.actions.receiveBooks(response.data.books));
      });
  }
}

export default booksSlice.reducer;