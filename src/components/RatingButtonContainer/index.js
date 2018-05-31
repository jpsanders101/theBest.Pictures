import React from 'react';
import PropTypes from 'prop-types';
import RatingButton from '../RatingButton';

export default class RatingButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightButtonsUpto: 0,
      clicked: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleMouseEnter(e) {
    if (!this.state.clicked) {
      this.setState({ highlightButtonsUpto: e.target.value, clicked: false });
    }
  }

  handleMouseLeave(e) {
    if (!this.state.clicked) {
      this.setState({ highlightButtonsUpto: 0, clicked: false });
    }
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({
      highlightButtonsUpto: e.target.value,
      clicked: e.target.value
    });
    this.props.handleRatingClick(e.target.value);
  }

  renderButtons(buttonQuantity = 5) {
    const buttons = [];
    for (let buttonCount = 1; buttonCount <= buttonQuantity; buttonCount++) {
      const highlighted = buttonCount <= this.state.highlightButtonsUpto;
      buttons.push(
        <RatingButton
          key={buttonCount}
          value={buttonCount}
          onClick={this.handleOnClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          highlighted={highlighted}
          clicked={this.state.clicked}
        />
      );
    }
    return buttons;
  }

  render() {
    return (
      <div className="review-form_rating-buttons" id="rating">
        {this.renderButtons()}
      </div>
    );
  }
}

RatingButtonContainer.propTypes = {
  handleRatingClick: PropTypes.func.isRequired
};
