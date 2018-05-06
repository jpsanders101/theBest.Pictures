import React from 'react';
import PropTypes from 'prop-types';

const SeenSelect = props => {
  const onClick = e => {
    props.onClick(props.name);
  };

  return (
    <span
      className={`seen-select ${props.seen ? 'seen' : 'not-seen'}`}
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
