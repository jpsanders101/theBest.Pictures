import React, {PropTypes} from 'react';
import RatingButtonContainer from './RatingButtonContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.movie.rating,
      review: props.movie.review
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let state = Object.assign({}, this.state, {review: e.target.value} );
    this.setState(state);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const movie = Object.assign({}, this.state);
    this.props.actions.saveReview(movie);
  }

  render() {
    return (
      <form name="review-form" onSubmit={this.handleOnSubmit}>
        <label>
          Rating
          <RatingButtonContainer />
        </label>
        <label>
          Thoughts about {this.props.movie.name}...
          <textarea
            value={this.state.review}
            onChange={this.onChangeHandler}
          ></textarea>
        </label>
          <input type="submit" value="Save" />
      </form>
    );
  }
}

ReviewForm.propTypes = {
  actions: PropTypes.object,
  movie: PropTypes.object
};

