import React from 'react';
import { connect } from 'react-redux';
import Filter from '../Filter';
import PropTypes from 'prop-types';

function FilterPanel({ seenFilter }) {
  return (
    <div className="filter-panel">
      <span className="filter-panel__label">Filters</span>
      <Filter
        filter="seen"
        displayText="Seen"
        isSelected={seenFilter === 'seen'}
      />
      |
      <Filter
        filter="unseen"
        displayText="Yet to See"
        isSelected={seenFilter === 'unseen'}
      />
    </div>
  );
}

FilterPanel.propTypes = {
  seenFilter: PropTypes.string.isRequired
};

export default connect(state => ({
  seenFilter: state.app.filters.seen
}))(FilterPanel);
