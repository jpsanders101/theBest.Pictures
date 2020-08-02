import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import { connect } from 'react-redux';
import { markAsSeen } from '../../actions/movielistActions';

function MovieList(props) {
  const handleMovieClick = (movieName) => {
    const movieList = [...props.movies];
    let index = movieList.findIndex((movie) => {
      return movie.name === movieName;
    });
    movieList[index].seen = true;
    props.markAsSeen(movieList);
  };

  const renderMovieList = () => {
    return props.movies
      .filter((movie) => {
        if (props.filters.seen === 'none') {
          return true;
        } else if (props.filters.seen === 'seen') {
          return movie.seen;
        } else if (props.filters.seen === 'unseen') {
          return !movie.seen;
        }
      })
      .map((movie) => (
        <MovieItem
          key={movie.awardNumber}
          name={movie.name}
          onClick={handleMovieClick}
          releaseYear={movie.releaseYear}
          seen={movie.seen}
        />
      ));
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
