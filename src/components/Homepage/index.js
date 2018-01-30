import React, {PropTypes} from 'react';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>A place to tick off Oscar best picture winners as I watch them.</h1>
        This represents the homepage and will be where the full list of movies will go.
      <ul>
        {this.props.bestPictureWinners.map((movie, index) => {
          return <li key={index}>Name: {movie.name}, Year of Release:{movie.releaseYear}</li>
        })}
      </ul>

      </div>
    );
  }
}

Homepage.propTypes = {
  bestPictureWinners: PropTypes.array.isRequired
}

export default Homepage;
