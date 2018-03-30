import React from 'react';
import RatingButtonContainer from './RatingButtonContainer';

export default function ReviewForm() {
  return (
    <form name="review-form">
      <label>
        Rating
        <RatingButtonContainer />
      </label>
      <label>
        Thoughts about the picture...
        <textarea></textarea>
      </label>
        <input type="submit" value="Save" />
    </form>
  );
}



