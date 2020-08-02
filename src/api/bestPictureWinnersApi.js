import delay from './delay';
import FILLER_TEXT from './fillerText';
import { bestPictureWinners as movies } from './bestPictureWinners';

// Adds additional fields to data
movies.forEach((movie) => {
  movie.rating = null;
  movie.review = null;
  movie.synopsis = FILLER_TEXT;
});

class bestPictureWinnersApi {
  static getAllMovies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...movies]);
      }, delay);
    });
  }

  static saveReview(review) {
    review = { ...review };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const forbiddenWords = ['overrated', 'Kafkaesque'];
        if (forbiddenWords.some((word) => review.review.includes(word))) {
          reject(
            `Review must not contain any of the following forbidden words: ${forbiddenWords.join(
              ', '
            )}`
          );
        }
        // Review would be persisted on a database somewhere at this point
        resolve(review);
      }, delay);
    });
  }
}

export default bestPictureWinnersApi;
