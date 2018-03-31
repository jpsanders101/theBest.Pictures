import * as types from './constants.js';
import bestPictureWinnersApi from  '../api/bestPictureWinnersApi';

export const markAsSeen = (movies) => {
  return {type: types.MARK_AS_SEEN, movies};
};

export const loadMoviesSuccess = (movies) => {
  return {type: types.LOAD_MOVIES, movies};
};

export const loadMovies = () => {
  return dispatch => {
    bestPictureWinnersApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
};

export const saveReviewSuccess = (movie) => {

  return {type: types.SAVE_REVIEW, movie};
};

export const saveReview = (movie) => {
  return dispatch => {
    bestPictureWinnersApi.saveReview(movie).then(movie => {
      dispatch(saveReviewSuccess(movie));
    }).catch(error => {
      throw(error);
    });
  };
};
