import * as types from '../actions/constants';
import initialState from './initialState';

export default (state = initialState.ajaxCalls, action) => {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + action.ajaxCalls;
  }
  if (action.type === types.END_AJAX_CALL) {
    return state - action.ajaxCalls;
  }
  return state;
};
