import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import Filter from '../Filter';

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

  seenFilterOnClickHandler(e) {
    if (this.state.filter === e.target.dataset.filter) {
      this.setState({ filter: 'none' });
    } else {
      this.setState({ filter: e.target.dataset.filter });
    }
  }

  render() {
    return (
      <div>
        {this.nextUp(this.props.movies)}
        <div className="movie-list-section">
          <div>
            <Filter
              filter="seen"
              displayText="Seen"
              seenFilterOnClickHandler={this.seenFilterOnClickHandler}
              isSelected={this.state.filter === 'seen'}
            />
            |
            <Filter
              filter="unseen"
              displayText="Yet to See"
              seenFilterOnClickHandler={this.seenFilterOnClickHandler}
              isSelected={this.state.filter === 'unseen'}
            />
          </div>
          <ul className="movie-list">
            {this.props.movies
              .filter(movie => {
                if (this.state.filter === 'none') {
                  return true;
                } else if (this.state.filter === 'seen') {
                  return movie.seen;
                } else if (this.state.filter === 'unseen') {
                  return !movie.seen;
                }
              })
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
