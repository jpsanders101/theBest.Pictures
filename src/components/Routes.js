import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import MoviePage from './MoviePage';

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Header} />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route path="/movie/:id" component={MoviePage} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Routes;
