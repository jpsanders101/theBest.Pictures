import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { applySeenFilter } from '../../actions/appActions';

function Filter({ filter, displayText, isSelected, applySeenFilter }) {
  const seenFilterOnClickHandler = e => {
    e.preventDefault();
    applySeenFilter(filter);
  };
  return (
    <React.Fragment>
      <input
        type="radio"
        name="seen-filter"
        id={`${filter}-filter`}
        onClick={seenFilterOnClickHandler}
        checked={isSelected}
      />
      <label
        htmlFor={`${filter}-filter`}
        className={classnames('movie-list_filter', {
          'movie-list__filter--selected': isSelected
        })}
        data-filter={filter}
        onClick={seenFilterOnClickHandler}
      >
        {displayText}
      </label>
    </React.Fragment>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
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
