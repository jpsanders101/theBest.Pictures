import * as movielistActions from '../../actions/movielistActions';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import MovieItem from '../MovieItem';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.onClickHandler = this.onClickHandler.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
  }

  onClickHandler(movieName) {
    const state = this.state;
    let index = state.bestPictureWinners.findIndex(movie => {
      return movie.name === movieName;
    });
    state.bestPictureWinners[index].seen = true;
    // this.props.dispatch(movielistActions.markAsSeen(state));
    this.props.actions.markAsSeen(state);
  }

  renderMovieList(movie) {
    return (<MovieItem
              key={movie.awardNumber}
              name={movie.name}
              onClick={this.onClickHandler}
              releaseYear={movie.releaseYear}
              seen={movie.seen}
            />);
  }

  render() {
    return (
    <div>
      <h1>Seen:</h1>
    <ul>
    {this.state.bestPictureWinners.filter(movie => movie.seen).map(this.renderMovieList)}
    </ul>
    <h1>Yet to See:</h1>
    <ul>
      {this.state.bestPictureWinners.filter(movie => !movie.seen).map(this.renderMovieList)}
    </ul>
    </div>);
  }
}

MovieList.propTypes = {
  bestPictureWinners: PropTypes.array.isRequired,
  markAsSeen: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movielistActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
