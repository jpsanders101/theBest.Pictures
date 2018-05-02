import React from 'react';
import PropTypes from 'prop-types';

const SeenSelect = props => {
  const onClick = e => {
    props.onClick(props.name);
  };

  return (
    <span className="seen-select" onClick={onClick}>
      {' '}
      - Seen?
    </span>
  );
};

SeenSelect.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SeenSelect;
