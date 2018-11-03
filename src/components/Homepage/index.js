import MovieList from '../MovieList';
import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import * as movielistActions from '../../actions/movielistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from '../Spinner';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateProgress(movies) {
    return Math.floor(
      (movies.filter(movie => movie.seen).length / movies.length) * 100
    );
  }

  render() {
    const { isLoading, movies, actions } = this.props;
    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="homepage">
            <h1 className="homepage__heading">
              How many winners of the Oscar for Best Picture have you seen?
            </h1>
            <ProgressBar progress={this.calculateProgress(movies)} />
            <MovieList actions={actions} movies={movies} />
          </div>
        )}
      </div>
    );
  }
}

Homepage.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.ajaxCalls > 0,
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(movielistActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
