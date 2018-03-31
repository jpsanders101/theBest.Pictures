import * as types from '../actions/constants';

export default (state = [], action) => {
  switch (action.type) {
    case types.MARK_AS_SEEN:
      return [...action.movies];
    case types.LOAD_MOVIES:
      return action.movies;
    case types.SAVE_REVIEW:
      const movieIndex = state.findIndex(movie => movie.releaseYear === action.releaseYear);
      const stateCopy = [...state];
      stateCopy.splice(movieIndex, 1, action);
      return stateCopy;
    default:
      return state;
  }
};
