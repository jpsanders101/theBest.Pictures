import * as types from '../actions/constants';

export default (state = 0, action) => {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return state + action.ajaxCalls;
  }
  if (action.type === types.END_AJAX_CALL) {
    return state - action.ajaxCalls;
  }
  return state;
};
