import React from 'react';
import { connect } from 'react-redux';
import SeenFilter from '../SeenFilter';
import PropTypes from 'prop-types';

function SeenFilterPanel({ seenFilter }) {
  return (
    <div className="filter-panel">
      <span className="filter-panel__label">Filters</span>
      <SeenFilter
        filter="seen"
        displayText="Seen"
        isSelected={seenFilter === 'seen'}
      />
      |
      <SeenFilter
        filter="unseen"
        displayText="Yet to See"
        isSelected={seenFilter === 'unseen'}
      />
    </div>
  );
}

SeenFilterPanel.propTypes = {
  seenFilter: PropTypes.string.isRequired
};

export default connect(state => ({
  seenFilter: state.app.filters.seen
}))(SeenFilterPanel);
