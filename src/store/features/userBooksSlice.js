import { createSlice } from 'redux-starter-kit';
import axios from 'axios';

const userBooksSlice = createSlice({
  slice: 'userBooks',
  initialState: {
    books: [],
    isFetchingUserBooks: false
  },
  reducers: {
    requestUserBooks(state) {
      state.isFetchingBooks = true;
    },
    receiveUserBooks(state, action) {
      state.isFetchingUserBooks = false;
      state.books = action.payload;
    }
  }
});

export const getUserBooks = () => {
  return dispatch => {
    dispatch(userBooksSlice.actions.requestUserBooks());
    return axios.get('http://localhost:3001/user-books')
      .then(response => {
        dispatch(userBooksSlice.actions.receiveUserBooks(response.data.user_books))
      })
  }
}

export default userBooksSlice.reducer;