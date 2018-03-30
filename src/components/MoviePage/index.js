import React, {PropTypes} from 'react';
import MovieItem from '../MovieItem';
import ReviewSection from './ReviewSection';

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Movie Title - Date</h1>
        <div className="movie-page-container">
          <div className="movie-details-section">
            <p>Synopsis of the movie goes here.</p>
          </div>
          <ReviewSection />
        </div>
      </div>
    );
  }
}
