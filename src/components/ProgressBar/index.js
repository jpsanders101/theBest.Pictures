import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__percent">{props.progress}%</div>
      <div
        className="progress-bar__filler--completed"
        style={{
          flex: `0 1 ${props.progress}%`
        }}
      />
      <div className="progress-bar__filler--remaining" />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};
