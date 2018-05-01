import React, { PropTypes } from "react";
import RatingButtonContainer from "./RatingButtonContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoadingButton from "../Common/LoadingButton";
import toastr from "toastr";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.movie.rating,
      review: props.movie.review || ""
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
    this.props.actions.saveReview(review).catch(error => {
      toastr.error(error);
    });
  }

  handleRatingClick(rating) {
    let state = Object.assign({}, this.state, { rating });
    this.setState(state);
  }

  buttonValue() {
    return this.props.movie.review ? "Update" : "Save";
  }

  render() {
    return (
      <form name="review-form" onSubmit={this.handleOnSubmit}>
        <label>
          Rating
          <RatingButtonContainer handleRatingClick={this.handleRatingClick} />
        </label>
        <label>
          Thoughts about {this.props.movie.name}...
          <textarea value={this.state.review} onChange={this.onChangeHandler} />
        </label>
        <LoadingButton value={this.buttonValue()} />
      </form>
    );
  }
}

ReviewForm.propTypes = {
  actions: PropTypes.object,
  movie: PropTypes.object
};
