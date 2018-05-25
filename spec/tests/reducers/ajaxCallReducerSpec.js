import ajaxCallReducer from '../../../src/reducers/ajaxCallReducer';

describe('ajaxCallReducer', () => {
  describe('GIVEN a BEGIN_AJAX_CALL action has been dispatched', () => {
    it('SHOULD return correctly updated state', () => {
      expect(
        ajaxCallReducer(0, {
          type: 'BEGIN_AJAX_CALL',
          ajaxCalls: 1
        })
      ).toEqual(1);
    });
  });
  describe('GIVEN an END_AJAX_CALL action has been dispatched', () => {
    it('SHOULD return correctly updated state', () => {
      expect(
        ajaxCallReducer(1, {
          type: 'END_AJAX_CALL',
          ajaxCalls: 1
        })
      ).toEqual(0);
    });
  });
  describe('GIVEN an action of some other type has been dispatched', () => {
    it('SHOULD return state without update', () => {
      expect(
        ajaxCallReducer(0, {
          type: 'SOMETHING_ELSE',
          ajaxCalls: 1
        })
      ).toEqual(0);
    });
  });
});
