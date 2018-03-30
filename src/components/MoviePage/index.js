import React, {PropTypes} from 'react';
import MovieItem from '../MovieItem';
import ReviewSection from './ReviewSection';

export default function MoviePage(props) {
  return(
    <div>
      <h1>Movie Title - Date</h1>
      <div className="movie-page-container">
        <div className="movie-details-section">
          <p>Synopsis of the movie goes here.</p>
        </div>
        <ReviewSection movie={props.movie}/>
      </div>
    </div>
  );
}

MoviePage.propTypes = {
  movie: PropTypes.object
};
