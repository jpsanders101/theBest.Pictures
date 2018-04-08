import React, {PropTypes} from 'react';
import RatingButtonContainer from './RatingButtonContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


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
    let state = Object.assign({}, this.state, {review: e.target.value} );
    this.setState(state);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state, {releaseYear: this.props.movie.releaseYear});
    this.props.actions.saveReview(review);
  }

  handleRatingClick(rating) {
    let state = Object.assign({}, this.state, {rating});
    this.setState(state);
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
          <textarea
            value={this.state.review}
            onChange={this.onChangeHandler}
          ></textarea>
        </label>
          <input type="submit" value={this.props.movie.review ? "Update" : "Save"} />
      </form>
    );
  }
}

ReviewForm.propTypes = {
  actions: PropTypes.object,
  movie: PropTypes.object
};

