import React from 'react';
import "./ProgressBar.scss"
export const ProgressBar = ({ progress }) => {
  return (
    <span className={`card__progress-box ${progress === null ? "card__progress-box_type_hidden" : 'card__progress-box_type_active'}`}>
      <span className="card__progress_range" style={{ width: `${progress}%`}}></span>
    </span>
  );
}

