import React, {PropTypes} from 'react';

class MovieList extends React.Component {
  render() {
    return (
    <ul>
    {this.props.bestPictureWinners.map((movie, index) => {
      return <li key={index}>Name: {movie.name}, Year of Release:{movie.releaseYear}</li>;
    })}
    </ul>);
  }
}

MovieList.propTypes = {
  bestPictureWinners: PropTypes.array.isRequired
}

export default MovieList;
