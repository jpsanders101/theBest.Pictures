import * as types from './constants';

export const beginAjaxCall = (ajaxCalls) => {
  return {type: types.BEGIN_AJAX_CALL, ajaxCalls};
};
