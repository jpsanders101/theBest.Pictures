import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import FilterPanel from '../FilterPanel';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
    this.seenFilterOnClickHandler = this.seenFilterOnClickHandler.bind(this);
    this.state = {
      filter: 'none'
    };
  }

  onClickHandler(movieName) {
    const movieList = [...this.props.movies];
    let index = movieList.findIndex(movie => {
      return movie.name === movieName;
    });
    movieList[index].seen = true;
    this.props.actions.markAsSeen(movieList);
  }

  renderMovieList() {
    return this.props.movies
      .filter(movie => {
        if (this.state.filter === 'none') {
          return true;
        } else if (this.state.filter === 'seen') {
          return movie.seen;
        } else if (this.state.filter === 'unseen') {
          return !movie.seen;
        }
      })
      .map(movie => (
        <MovieItem
          key={movie.awardNumber}
          name={movie.name}
          onClick={this.onClickHandler}
          releaseYear={movie.releaseYear}
          seen={movie.seen}
        />
      ));
  }

  renderBottomFillers() {
    return this.props.movies.map((movie, index) => (
      <span key={index} className="movie-list__filler" />
    ));
  }

  nextUp(movies) {
    const nextUp = this.props.movies.find(movie => !movie.seen);
    return nextUp ? (
      <div className="next-up">
        <h1 className="next-up__title">Next up...</h1>
        <div className="next-up__movie-item">{nextUp.name}</div>
      </div>
    ) : (
      ''
    );
  }

  seenFilterOnClickHandler(e) {
    if (this.state.filter === e.target.dataset.filter) {
      this.setState({ filter: 'none' });
    } else {
      this.setState({ filter: e.target.dataset.filter });
    }
  }

  render() {
    return (
      <div className="movie-list__container">
        {this.nextUp(this.props.movies)}
        <FilterPanel
          filter={this.state.filter}
          seenFilterOnClickHandler={this.seenFilterOnClickHandler}
        />
        <ul className="movie-list">
          {this.renderMovieList()}
          {this.renderBottomFillers()}
        </ul>
      </div>
    );
  }
}

MovieList.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};
