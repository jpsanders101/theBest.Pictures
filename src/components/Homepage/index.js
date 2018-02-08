import state from '../../api/bestPictureWinners';
import {Link} from 'react-router';
import MovieList from '../MovieList';
import React, {PropTypes} from 'react';


class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>A place to tick off Oscar best picture winners as I watch them.</h1>
      <MovieList bestPictureWinners={state.bestPictureWinners} />
      <Link to="/about">ABOUT</Link>
      </div>
    );
  }
}

export default Homepage;
