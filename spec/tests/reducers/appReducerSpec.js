import proxyquire from 'proxyquire';

proxyquire.noCallThru();

let appReducer;

const createAppReducer = cookie => {
  return (appReducer = proxyquire(
    '../../../src/reducers/appReducer',
    {},
    { document: { cookie } }
  ).default);
};

describe('App Reducer', () => {
  describe('GIVEN seen_landing cookie is true', () => {
    beforeEach(() => {
      appReducer = createAppReducer(true);
    });
    it('SHOULD return correct initial state', () => {
      expect(appReducer(undefined, {})).toEqual({
        errorState: false,
        showLandingPage: true
      });
    });
  });
  describe('GIVEN seen_landing cookie is not set', () => {
    beforeEach(() => {
      appReducer = createAppReducer();
    });
    it('SHOULD return correct initial state', () => {
      expect(appReducer(undefined, {})).toEqual({
        errorState: false,
        showLandingPage: true
      });
    });
  });
});
