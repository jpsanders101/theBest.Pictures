import React, {PropTypes} from 'react';
import ReviewForm from './ReviewForm';

export default function ReviewSection({ movie }) {
  return (
    <div className="review-section">
      <h2>What did you think?</h2>
      <ReviewForm movie={movie}/>
    </div>
  );
}

ReviewSection.propTypes = {
  movie: PropTypes.object
};
