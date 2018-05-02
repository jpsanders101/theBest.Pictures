import 'babel-polyfill';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes.js';
import './styles/style.less';
import './styles/progressBar.less';
import './components/Common/LoadingButton/small.less';
import { loadMovies } from './actions/movielistActions';
import '../node_modules/toastr/build/toastr.min.css';
import App from './components/App.js';

const store = configureStore();
store.dispatch(loadMovies());

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
