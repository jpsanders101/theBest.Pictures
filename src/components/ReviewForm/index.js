import React from 'react';
import PropTypes from 'prop-types';
import RatingButtonContainer from '../RatingButtonContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadingButton from '../LoadingButton';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.movie.rating,
      review: props.movie.review || ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  onChangeHandler(e) {
    let state = Object.assign({}, this.state, { review: e.target.value });
    this.setState(state);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state, {
      releaseYear: this.props.movie.releaseYear
    });
    // TODO: DON'T PASS ACTIONS AS PROPS
    this.props.actions.saveReview(review);
  }

  handleRatingClick(rating) {
    let state = Object.assign({}, this.state, { rating });
    this.setState(state);
  }

  buttonValue() {
    return this.props.movie.review ? 'Update' : 'Save';
  }

  render() {
    return (
      <form name="review-form" onSubmit={this.handleOnSubmit}>
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
            onChange={this.onChangeHandler}
          />
        </div>
        <LoadingButton value={this.buttonValue()} />
      </form>
    );
  }
}

ReviewForm.propTypes = {
  actions: PropTypes.object,
  movie: PropTypes.object
};
