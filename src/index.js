import '@babel/polyfill';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import './assets/root-style.less';
import { loadMovies } from './actions/movielistActions';
import '../node_modules/toastr/build/toastr.min.css';
import Routes from './components/Routes.js';

const store = configureStore();
store.dispatch(loadMovies());

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
);
