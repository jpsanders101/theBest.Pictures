import React from 'react';
import { BrowserRouter as Route, IndexRoute } from 'react-router-dom';
import About from './components/About';
import App from './components/App';
import Homepage from './components/Homepage';
import MoviePage from './components/MoviePage';

export default (
  <Route component={App}>
    <Route path="/" component={Homepage} />
    <Route path="about" component={About} />
    <Route path="movie/:id" component={MoviePage} />
  </Route>
);
