import React, {PropTypes} from 'react';
import ReviewForm from './ReviewForm';

export default function ReviewSection({ movie, actions }) {
  return (
    <div className="review-section">
      <h2>What did you think?</h2>
      <ReviewForm movie={movie} actions={actions}/>
    </div>
  );
}

ReviewSection.propTypes = {
  movie: PropTypes.object,
  actions: PropTypes.object.isRequired
};
