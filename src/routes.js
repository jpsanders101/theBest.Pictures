import React from 'react';
import { Route, IndexRoute } from 'react-router';
import About from './components/About';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <Route path="about" component={About} />
  </Route>
);
