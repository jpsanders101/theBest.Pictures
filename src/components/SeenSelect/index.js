import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SeenSelect = props => {
  const onClick = e => {
    props.onClick(props.name);
  };

  return (
    <span
      className={classnames('movie-item_marker', {
        'movie-item_marker--seen-true': props.seen,
        'movie-item_marker--seen-false': !props.seen
      })}
      onClick={onClick}
    >
      Seen
    </span>
  );
};

SeenSelect.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  seen: PropTypes.bool.isRequired
};

export default SeenSelect;
