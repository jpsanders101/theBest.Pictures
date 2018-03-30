import React from 'react';

export default class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highlightButtonsUpto: 0
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({ highlightButtonsUpto: e.target.value });
  }

  renderButtons (buttonQuantity = 5) {
    const buttons = [];
    for (let buttonCount = 1; buttonCount <= buttonQuantity; buttonCount++) {
      const highlighted = buttonCount <= this.state.highlightButtonsUpto;
      buttons.push(
        <RatingButton
          key={buttonCount}
          value={`${buttonCount}`}
          onMouseEnter={this.handleMouseEnter}
          highlighted={highlighted}
        />
      );
    }
    return buttons;
  }

  render () {
    return (
      <form name="review-form">
        <label>
          Rating
          <div className="rating-buttons">
            {this.renderButtons()}
          </div>
        </label>
        <label>
          Thoughts about the picture...
          <textarea></textarea>
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}


function RatingButton({value, onMouseEnter, highlighted}) {
  const className = highlighted ? "highlighted" : "";

  return (
    <button
      onMouseEnter={onMouseEnter}
      value={value}
      className={className}
    >
      {value}
    </button>
  )
}
