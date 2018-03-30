import React, {PropTypes} from 'react';
import RatingButtonContainer from './RatingButtonContainer';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    let state = Object.assign({}, this.state, {review: e.target.value} );
    this.setState(state);
  }

  render() {
    return (
      <form name="review-form">
        <label>
          Rating
          <RatingButtonContainer />
        </label>
        <label>
          Thoughts about the picture...
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
  movie: PropTypes.object
};


