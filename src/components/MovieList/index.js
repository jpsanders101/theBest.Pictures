import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
  }

  onClickHandler(movieName) {
    const movieList = [...this.props.movies];
    let index = movieList.findIndex(movie => {
      return movie.name === movieName;
    });
    movieList[index].seen = true;
    this.props.actions.markAsSeen(movieList);
  }

  renderMovieList(movie) {
    return (
      <MovieItem
        key={movie.awardNumber}
        name={movie.name}
        onClick={this.onClickHandler}
        releaseYear={movie.releaseYear}
        seen={movie.seen}
      />
    );
  }

  nextUp(movies) {
    const nextUp = this.props.movies.find(movie => !movie.seen);
    return nextUp ? (
      <span>
        <h1>Next up...</h1>
        {nextUp.name}
      </span>
    ) : (
        ''
      );
  }

  render() {
    return (
      <div>
        {this.nextUp(this.props.movies)}
        <div className="movie-list-section">
          <h1>Seen:</h1>
          <ul className="movie-list">
            {this.props.movies
              .filter(movie => movie.seen)
              .map(this.renderMovieList)}
          </ul>
        </div>
        <div className="movie-list-section">
          <h1>Yet to See:</h1>
          <ul className="movie-list">
            {this.props.movies
              .filter(movie => !movie.seen)
              .map(this.renderMovieList)}
          </ul>
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};
