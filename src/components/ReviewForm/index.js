import React from 'react';
import PropTypes from 'prop-types';
import RatingButtonContainer from '../RatingButtonContainer';
import { connect } from 'react-redux';
import LoadingButton from '../LoadingButton';
import { saveReview } from '../../actions/movielistActions.js';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: props.movie.rating,
      review: props.movie.review || ''
    };

    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
  }

  handleReviewChange(e) {
    let state = { ...this.state, ...{ review: e.target.value } };
    this.setState(state);
  }

  handleReviewSubmit(e) {
    e.preventDefault();
    const review = {
      ...this.state,
      ...{
        releaseYear: this.props.movie.releaseYear
      }
    };
    this.props.saveReview(review);
  }

  handleRatingClick(rating) {
    let state = { ...this.state, ...{ rating } };
    this.setState(state);
  }

  buttonValue() {
    return this.props.movie.review ? 'Update' : 'Save';
  }

  render() {
    return (
      <form name="review-form" onSubmit={this.handleReviewSubmit}>
        <label htmlFor="rating" className="review-form__label">
          Rating
        </label>
        <RatingButtonContainer handleRatingClick={this.handleRatingClick} />
        <label className="review-form__label" htmlFor="review">
          Thoughts about {this.props.movie.name}
          ...
        </label>
        <div className="review-form__text-box-container">
          <textarea
            className="review-form__text-box"
            id="review"
            value={this.state.review}
            onChange={this.handleReviewChange}
          />
        </div>
        <LoadingButton value={this.buttonValue()} />
        {this.props.errorState && (
          <span className="review-form__error-message">
            "Oops! Something went wrong."
          </span>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  errorState: state.app.errorState
});

ReviewForm.propTypes = {
  actions: PropTypes.object,
  movie: PropTypes.object,
  errorState: PropTypes.bool.isRequired,
  saveReview: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { saveReview })(ReviewForm);
