import React from 'react';
import { connect } from 'react-redux';
import SeenFilter from '../SeenFilter';
import PropTypes from 'prop-types';

function SeenFilterPanel({ seenFilter }) {
  return (
    <div className="filter-panel">
      <h3 className="filter-panel__heading">Search & Filter</h3>
      <div className="filter-panel__seen-filters">
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
      <select className="filter-panel__genre-select" />
      <input className="filter-panel__search" type="text" />
      <input className="filter-panel__date-range" type="range" />
      <input className="filter-panel__date-range" type="range" />
    </div>
  );
}

SeenFilterPanel.propTypes = {
  seenFilter: PropTypes.string.isRequired
};

export default connect(state => ({
  seenFilter: state.app.filters.seen
}))(SeenFilterPanel);
