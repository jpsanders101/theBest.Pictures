// import state from '../../api/bestPictureWinners';
import MovieList from '../MovieList';
import React, {PropTypes} from 'react';


class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>A place to tick off Oscar best picture winners as I watch them.</h1>
        <div className="progress-bar">
          <div className="progress-bar-completed"></div>
          <div className="progress-bar-remaining"></div>
        </div>
        <MovieList />
      </div>
    );
  }
}

export default Homepage;
