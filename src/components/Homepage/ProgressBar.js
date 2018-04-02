import React from 'react';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-completed"
        style={{
          flex: `${props.progress}`
        }}
      ></div>
      <div
        className="progress-bar-remaining"
        style={{
          flex: `${100 - props.progress}`
        }}
      ></div>
    </div>
  );
}
