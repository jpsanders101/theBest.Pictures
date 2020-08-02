import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SeenMarker = (props) => {
  const onClick = (e) => {
    props.onClick(props.name);
  };

  return (
    <span
      className={classnames('movie-item__marker', {
        'movie-item__marker--seen-true': props.seen,
        'movie-item__marker--seen-false': !props.seen,
      })}
      onClick={onClick}
    >
      Seen
    </span>
  );
};

SeenMarker.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  seen: PropTypes.bool.isRequired,
};

export default SeenMarker;
