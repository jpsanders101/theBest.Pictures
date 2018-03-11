import * as types from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case types.MARK_AS_SEEN:
      return [...action.movies];
    case types.LOAD_MOVIES:
      return action.movies;
    default:
      return state;
  }
};
