import * as types from '../actions/constants';
import initialState from './initialState';

export default (state = initialState.app, action) => {
  switch (action.type) {
    case types.SET_ERROR_STATE:
      return { ...state, ...{ errorState: true } };
    case types.REMOVE_ERROR_STATE:
      return { ...state, ...{ errorState: false } };
    default:
      return state;
  }
};
