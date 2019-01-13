import React from 'react';
import PropTypes from 'prop-types';
import ReviewSection from '../ReviewSection';
import { connect } from 'react-redux';
import * as movielistActions from '../../actions/movielistActions';
import { bindActionCreators } from 'redux';
import Spinner from '../Spinner';
import BasePage from '../BasePage';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasePage><div>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
            <div className="movie-page_content">
              <h1 className="movie-page__heading">
                {this.props.movie.name}{' '}
                <span className="movie-page__year">
                  {`(${this.props.movie.releaseYear})`}
                </span>
              </h1>
              <div className="movie-page">
                <div className="movie-page__details-section">
                  <p>{this.props.movie.synopsis}</p>
                  {this.props.movie.review && (
                    <div className="movie-page_review">
                      Your review: {this.props.movie.review}
                    </div>
                  )}
                </div>
                <ReviewSection
                  movie={this.props.movie}
                  actions={this.props.actions}
                />
              </div>
            </div>
          )}
      </div></BasePage>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let movie = {
    ...state.movies.find(
      movie => movie.releaseYear === parseInt(ownProps.match.params.id)
    )
  };
  return {
    movie: movie,
    isLoading: state.ajaxCalls > 0
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    actions: bindActionCreators(movielistActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(MoviePage);
