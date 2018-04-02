import React, {PropTypes} from 'react';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-completed"
        style={{
          flex: `0 1 ${props.progress}%`
        }}
      ></div>
      <div
        className="progress-bar-remaining"
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}
