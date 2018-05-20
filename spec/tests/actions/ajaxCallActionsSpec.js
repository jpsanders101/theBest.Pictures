import {
  beginAjaxCall,
  endAjaxCall
} from '../../../src/actions/ajaxCallActions';

describe('beginAjaxCall', () => {
  it('SHOULD create beginAjaxCall action', () => {
    expect(beginAjaxCall(2)).toEqual(
      jasmine.objectContaining({ type: 'BEGIN_AJAX_CALL', ajaxCalls: 2 })
    );
  });
  it('SHOULD create endAjaxCall action', () => {
    expect(endAjaxCall(2)).toEqual(
      jasmine.objectContaining({ type: 'END_AJAX_CALL', ajaxCalls: 2 })
    );
  });
});
