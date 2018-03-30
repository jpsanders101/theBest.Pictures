import React from 'react';
import RatingButton from './RatingButton';


export default class RatingButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightButtonsUpto: 0
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({ highlightButtonsUpto: e.target.value });
  }

  handleMouseLeave(e) {
    this.setState({ highlightButtonsUpto: 0 });
  }

  handleOnClick(e) {
    e.preventDefault();
  }

  renderButtons (buttonQuantity = 5) {
    const buttons = [];
    for (let buttonCount = 1; buttonCount <= buttonQuantity; buttonCount++) {
      const highlighted = buttonCount <= this.state.highlightButtonsUpto;
      buttons.push(
        <RatingButton
          key={buttonCount}
          value={`${buttonCount}`}
          onClick={this.handleOnClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          highlighted={highlighted}
        />
      );
    }
    return buttons;
  }

  render() {
    return (
      <div className="rating-buttons">
        {this.renderButtons()}
      </div>
    );
  }

}
