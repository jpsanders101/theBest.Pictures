import '@babel/polyfill';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import './assets/root-style.less';
import Routes from './components/Routes.js';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
);
