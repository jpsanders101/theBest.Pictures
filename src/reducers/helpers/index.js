export function saveReview(state, review) {
  const movieIndex = state.findIndex(
    (movie) => movie.releaseYear === review.releaseYear
  );
  const stateCopy = [...state];
  stateCopy[movieIndex].seen = true;
  stateCopy[movieIndex].review = review.review;
  stateCopy[movieIndex].rating = review.rating;

  return stateCopy;
}
