import React from 'react';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-completed"></div>
      <div className="progress-bar-remaining"></div>
    </div>
  );
}
