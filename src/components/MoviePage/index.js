import React, {PropTypes} from 'react';
import MovieItem from '../MovieItem';

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>this.props.movieName</h1>
        <p>this.props.movieSynopsis</p>
      </div>
    );
  }
}
