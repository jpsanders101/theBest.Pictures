import React from 'react';

export default function RatingButton({value, onMouseEnter, highlighted, onMouseLeave}) {
  const className = highlighted ? "highlighted" : "";

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      value={value}
      className={className}
    >
      {value}
    </button>
  )
}
