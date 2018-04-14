import * as types from './constants.js';
import bestPictureWinnersApi from  '../api/bestPictureWinnersApi';
import { beginAjaxCall, endAjaxCall } from './spinnerActions';

export const markAsSeen = (movies) => {
  return {type: types.MARK_AS_SEEN, movies};
};

export const loadMoviesSuccess = (movies) => {
  return {type: types.LOAD_MOVIES, movies};
};

export const loadMovies = () => {
  return dispatch => {
    dispatch(beginAjaxCall(1));
    bestPictureWinnersApi.getAllMovies()
    .then(movies => {
      dispatch(loadMoviesSuccess(movies));
    })
    .then(() => {
      dispatch(endAjaxCall(1));
    })
    .catch(error => {
      throw(error);
    });
  };
};

export const saveReviewSuccess = (review) => {
  return {type: types.SAVE_REVIEW, review};
};

export const saveReview = (review) => {
  return dispatch => {
    bestPictureWinnersApi.saveReview(review).then(review => {
      dispatch(saveReviewSuccess(review));
    }).catch(error => {
      throw(error);
    });
  };
};
