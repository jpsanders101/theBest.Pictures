import React from 'react';
import PropTypes from 'prop-types';

export default function RatingButton({
  value,
  onClick,
  onMouseEnter,
  highlighted,
  onMouseLeave
}) {
  const className = highlighted ? 'highlighted' : '';

  return (
    <button
      className={className}
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
