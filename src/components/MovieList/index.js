import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import { connect } from 'react-redux';
import { markAsSeen } from '../../actions/movielistActions';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleMovieClick(movieName) {
    const movieList = [...this.props.movies];
    let index = movieList.findIndex(movie => {
      return movie.name === movieName;
    });
    movieList[index].seen = true;
    this.props.markAsSeen(movieList);
  }

  renderMovieList() {
    return this.props.movies
      .filter(movie => {
        if (this.props.filters.seen === 'none') {
          return true;
        } else if (this.props.filters.seen === 'seen') {
          return movie.seen;
        } else if (this.props.filters.seen === 'unseen') {
          return !movie.seen;
        }
      })
      .map(movie => (
        <MovieItem
          key={movie.awardNumber}
          name={movie.name}
          onClick={this.handleMovieClick}
          releaseYear={movie.releaseYear}
          seen={movie.seen}
        />
      ));
  }

  handleFilterClick(e) {
    if (this.props.filters.seen === e.target.dataset.filter) {
      this.setState({ filter: 'none' });
    } else {
      this.setState({ filter: e.target.dataset.filter });
    }
  }

  render() {
    return (
      <div className="movie-list__container">
        <ul className="movie-list">{this.renderMovieList()}</ul>
      </div>
    );
  }
}

MovieList.propTypes = {
  filters: PropTypes.shape.isRequired,
  markAsSeen: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

export default connect(
  state => ({
    filters: state.app.filters
  }),
  { markAsSeen }
)(MovieList);
