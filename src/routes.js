import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './components/About';
import App from './components/App';
import Homepage from './components/Homepage';
import MoviePage from './components/MoviePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="about" component={About} />
    <Route path="movie/:id" component={MoviePage} />
  </Route>
);
