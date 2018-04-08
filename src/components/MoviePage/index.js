import React, {PropTypes} from 'react';
import MovieItem from '../MovieItem';
import ReviewSection from './ReviewSection';
import {connect} from 'react-redux';
import * as movielistActions from '../../actions/movielistActions';
import {bindActionCreators} from 'redux';


class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>{this.props.movie.name} - {this.props.movie.releaseYear}</h1>
        <div className="movie-page-container">
          <div className="movie-details-section">
            <p>{this.props.movie.synopsis}</p>
            {this.props.movie.review ? `Your review: ${this.props.movie.review.review}` : ''}
          </div>
          <ReviewSection movie={this.props.movie} actions={this.props.actions}/>
        </div>
      </div>
    );
  }
}

MoviePage.propTypes = {
  movie: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let movie = Object.assign({}, state.movies.find(movie => movie.releaseYear === parseInt(ownProps.params.id)));
  return {
    movie: movie
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    actions: bindActionCreators(movielistActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(MoviePage);
