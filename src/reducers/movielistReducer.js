import * as types from '../actions/constants';

export default (state = [], action) => {
  switch (action.type) {
    case types.MARK_AS_SEEN:
      return [...action.movies];
    case types.LOAD_MOVIES:
      return action.movies;
    case types.SAVE_REVIEW:
      const movieIndex = state.findIndex(movie => movie.releaseYear === action.review.releaseYear);
      const stateCopy = [...state];
      stateCopy[movieIndex].seen = true;
      stateCopy[movieIndex].review = action.review;
      stateCopy[movieIndex].rating = action.rating;
      return stateCopy;
    default:
      return state;
  }
};
