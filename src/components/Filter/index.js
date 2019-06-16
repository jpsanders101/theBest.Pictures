import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { applySeenFilter } from '../../actions/appActions';

function Filter({ filter, displayText, isSelected, applySeenFilter }) {
  const seenFilterOnClickHandler = e => {
    applySeenFilter();
  };
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

export default connect(
  () => ({}),
  (dispatch, ownProps) => ({
    applySeenFilter: () => {
      dispatch(applySeenFilter(ownProps.filter));
    }
  })
)(Filter);
