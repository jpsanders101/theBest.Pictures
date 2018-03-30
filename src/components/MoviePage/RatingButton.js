import React, {PropTypes} from 'react';

export default function RatingButton({value, onMouseEnter, highlighted, onMouseLeave}) {
  const className = highlighted ? "highlighted" : "";

  return (
    <button
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      value={value}
    >
      {value}
    </button>
  );
}

RatingButton.propTypes = {
  highlighted: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
