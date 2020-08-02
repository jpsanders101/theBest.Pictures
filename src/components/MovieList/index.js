import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import { connect } from 'react-redux';
import { markAsSeen } from '../../actions/movielistActions';

function MovieList(props) {
  const NUMBER_OF_MOVIES = 90;

  const handleMovieClick = (movieName) => {
    const movieList = [...props.movies];
    let index = movieList.findIndex((movie) => {
      return movie.name === movieName;
    });
    movieList[index].seen = true;
    props.markAsSeen(movieList);
  };

  const renderMovieList = () => {
    const movieItems = [];
    for (let i = 1; i <= NUMBER_OF_MOVIES; i++) {
      const movieData = require(`../../content/movies/${i}.json`);
      movieItems.push(
        <MovieItem
          key={i}
          awardNumber={i}
          name={movieData.title}
          onClick={handleMovieClick}
          releaseYear={movieData.releaseYear}
          seen={false}
        />
      );
    }
    return movieItems;
  };

  return (
    <div className="movie-list__container">
      <ul className="movie-list">{renderMovieList()}</ul>
    </div>
  );
}

MovieList.propTypes = {
  filters: PropTypes.shape({ seen: PropTypes.string }).isRequired,
  markAsSeen: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default connect(
  (state) => ({
    filters: state.app.filters,
  }),
  { markAsSeen }
)(MovieList);
