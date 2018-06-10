import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar_container">
      <div className="progress-bar">
        <div className="progress-bar_percent">{props.progress}%</div>
        <div
          className="progress-bar_filler--completed"
          style={{
            flex: `0 1 ${props.progress}%`
          }}
        />
        <div className="progress-bar_filler--remaining" />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};
