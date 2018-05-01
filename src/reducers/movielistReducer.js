import * as types from "../actions/constants";
import * as helpers from "./helpers";
import initialState from "./initialState";

export default (state = initialState.movies, action) => {
  switch (action.type) {
    case types.MARK_AS_SEEN:
      return [...action.movies];
    case types.LOAD_MOVIES:
      return action.movies;
    case types.SAVE_REVIEW:
      return helpers.saveReview(state, action.review);
    default:
      return state;
  }
};
