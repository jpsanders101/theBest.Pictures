import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import MoviePage from './MoviePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/movie/:id" component={MoviePage} />
      </Switch>
    );
  }
}

export default Routes;
