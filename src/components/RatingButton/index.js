import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function RatingButton({
  value,
  onClick,
  onMouseEnter,
  highlighted,
  onMouseLeave
}) {
  return (
    <button
      className={classnames('review-section_review-button', {
        'review-section_review-button--highlighted': highlighted
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      value={value}
    >
      {value}
    </button>
  );
}

RatingButton.propTypes = {
  highlighted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};
