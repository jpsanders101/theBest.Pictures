import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function RatingButton({
  value,
  onClick,
  onMouseEnter,
  highlighted,
  onMouseLeave,
  clicked
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-value={value}
    >
      <button
        className={classnames('review-section__review-button', {
          'review-section__review-button--highlighted-true': highlighted,
          'review-section__review-button--highlighted-false': !highlighted,
          'review-section__review-button--clicked': parseInt(clicked) === value
        })}
        onClick={onClick}
        value={value}
      >
        {value}
      </button>
    </div>
  );
}

RatingButton.propTypes = {
  highlighted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  clicked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired
};
