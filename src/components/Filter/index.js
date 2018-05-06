import React from 'react';

export default function Filter({
  filter,
  displayText,
  seenFilterOnClickHandler,
  isSelected
}) {
  return (
    <span
      className={isSelected ? 'selected' : ''}
      data-filter={filter}
      onClick={seenFilterOnClickHandler}
    >
      {displayText}
    </span>
  );
}
