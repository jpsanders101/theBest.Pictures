import React from 'react';
import Filter from '../Filter';
import PropTypes from 'prop-types';

export default function FilterPanel({ filter, seenFilterOnClickHandler }) {
  return (
    <div>
      <Filter
        filter="seen"
        displayText="Seen"
        seenFilterOnClickHandler={seenFilterOnClickHandler}
        isSelected={filter === 'seen'}
      />
      |
      <Filter
        filter="unseen"
        displayText="Yet to See"
        seenFilterOnClickHandler={seenFilterOnClickHandler}
        isSelected={filter === 'unseen'}
      />
    </div>
  );
}

FilterPanel.propTypes = {
  seenFilterOnClickHandler: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};
