import React from 'react';
import PropTypes from 'prop-types';
export default function Filter({
  filter,
  displayText,
  seenFilterOnClickHandler,
  isSelected
}) {
  return (
    <span
      className={'movie-list_filter' + (isSelected ? '--selected' : '')}
      data-filter={filter}
      onClick={seenFilterOnClickHandler}
    >
      {displayText}
    </span>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  seenFilterOnClickHandler: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};
