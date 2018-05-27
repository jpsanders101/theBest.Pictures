import 'babel-polyfill';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import './styles/style.less';
import './components/ProgressBar/small.less';
import './components/LoadingButton/small.less';
import './components/SeenSelect/small.less';
import './components/Filter/small.less';
import './components/MovieList/small.less';
import './components/MoviePage/small.less';
import './components/Header/small.less';
import './components/ReviewSection/small.less';
import './components/RatingButtonContainer/small.less';
import './components/FilterPanel/small.less';
import './components/Homepage/small.less';
import './components/MovieItem/small.less';
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
