import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from './App';
import store from './store';

axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);