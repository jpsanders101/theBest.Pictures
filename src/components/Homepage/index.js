// import state from '../../api/bestPictureWinners';
import MovieList from '../MovieList';
import React, {PropTypes} from 'react';
import ProgressBar from './ProgressBar';


class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>A place to tick off Oscar best picture winners as I watch them.</h1>
        <ProgressBar />
        <MovieList />
      </div>
    );
  }
}

export default Homepage;
