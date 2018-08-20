import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
export default function Filter({
  filter,
  displayText,
  seenFilterOnClickHandler,
  isSelected
}) {
  return (
    <span
      className={classnames('movie-list_filter', {
        'movie-list__filter--selected': isSelected
      })}
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
