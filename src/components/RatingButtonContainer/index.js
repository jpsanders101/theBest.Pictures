import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RatingButton from '../RatingButton';

export default function RatingButtonContainer(props) {
  const [highlightButtonsUpto, setHighlightButtonsUpto] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = e => {
    if (!clicked) {
      setHighlightButtonsUpto(e.currentTarget.dataset.value);
      setClicked(false);
    }
  };

  const handleMouseLeave = e => {
    if (!clicked) {
      setHighlightButtonsUpto(0);
      setClicked(false);
    }
  };

  const handleRatingClick = e => {
    e.preventDefault();
    setHighlightButtonsUpto(e.target.value);
    setClicked(e.target.value);
    props.handleRatingClick(e.target.value);
  };

  const renderButtons = (buttonQuantity = 5) => {
    const buttons = [];
    for (let buttonCount = 1; buttonCount <= buttonQuantity; buttonCount++) {
      const highlighted = buttonCount <= highlightButtonsUpto;
      buttons.push(
        <RatingButton
          key={buttonCount}
          value={buttonCount}
          onClick={handleRatingClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          highlighted={highlighted}
          clicked={clicked}
        />
      );
    }
    return buttons;
  };
  return (
    <div className="review-form__rating-buttons" id="rating">
      {renderButtons()}
    </div>
  );
}

RatingButtonContainer.propTypes = {
  handleRatingClick: PropTypes.func.isRequired
};
