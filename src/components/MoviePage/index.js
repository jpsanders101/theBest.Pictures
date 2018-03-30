import React, {PropTypes} from 'react';
import MovieItem from '../MovieItem';
import ReviewForm from './ReviewForm';

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Movie Title - Date</h1>
        <p>Synopsis of the movie goes here.</p>
        <ReviewForm />
      </div>
    );
  }
}
