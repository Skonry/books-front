import axios from 'axios';
import { createSlice } from 'redux-starter-kit';

const usersSlice = createSlice({
  slice: 'users',
  initialState: {
    currentUser: null,
    isLoginFormLoading: false,
    isRegistrationFormLoading: false
  },
  reducers: {
    logInUser(state, action) {
      state.currentUser = action.payload;
      state.isLoginFormLoading = false;
      state.isRegistrationFormLoading = false;
    },
    submitRegistrationForm(state, action) {
      state.isRegistrationFormLoading = true;
    },
    submitLoginForm(state, action) {
      state.isLoginFormLoading = true;
    }
  }
});

export const registerUser = (user, redirect) => {
    return dispatch => {
      dispatch(usersSlice.actions.submitRegistrationForm());
      return axios.post('http://localhost:3001/register', user)
        .then(response => {
          sessionStorage.setItem('token', response.data.auth_token);
          axios.defaults.headers.common['Authorization'] = response.data.auth_token;
          dispatch(usersSlice.actions.logInUser(response.data.user));
          redirect('/library');
        });
    }
}

export const authenticateUser = (user, redirect) => {
  return (dispatch) => {
    dispatch(usersSlice.actions.submitLoginForm());
    return axios.post('http://localhost:3001/authenticate', user)
      .then(response => {
        sessionStorage.setItem('token', response.data.auth_token);
        axios.defaults.headers.common['Authorization'] = response.data.auth_token;
        dispatch(usersSlice.actions.logInUser(response.data.user));
        redirect('/library');
      });
  }
}

export default usersSlice.reducer;