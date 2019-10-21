import { createSlice } from 'redux-starter-kit';
import axios from 'axios';

const shelvesSlice = createSlice({
    slice: 'shelves',
    initialState: { 
      shelves: [],
      isAddShelfFormLoading: false,
      isFetchingShelves: false
    },
    reducers: {
      requestShelves(state) {
        state.isFetchingShelves = true;
      },
      receiveShelves(state, action) {
        state.isFetchingShelves = false;
        state.shelves = action.payload;
      },
      submitAddShelfForm(state) {
        state.isAddShelfFormLoading = true;
      },
      addedShelf(state) {
        state.isAddShelfFormLoading = false;
      }
    }
});

export const getShelves = () => {
  return dispatch => {
    dispatch(shelvesSlice.actions.requestShelves());
    return axios.get('http://localhost:3001/shelves')
      .then(response => {
        dispatch(shelvesSlice.actions.receiveShelves(response.data.shelves));
      });
  }
}

export const addShelf = (shelf, redirect) => {
  return dispatch => {
    dispatch(shelvesSlice.actions.submitAddShelfForm());
    return axios.post('http://localhost:3001/shelves', shelf)
      .then(response => {
        dispatch(shelvesSlice.actions.addedShelf(response.data));
        redirect('/library');
      });
  }
}

export default shelvesSlice.reducer;