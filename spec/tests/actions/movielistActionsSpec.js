import { moviesData, reviewData } from '../../data';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

let mockBeginAjaxCallAction;
let mockEndAjaxCallAction;
let mockRemoveErrorStateAction;
let mockSetErrorStateAction;
let caughtError;

const beginAjaxCallSpy = jasmine.createSpy('beginAjaxCallSpy');
const endAjaxCallSpy = jasmine.createSpy('endAjaxCallSpy');
const saveReviewSpy = jasmine.createSpy('saveReviewSpy');
const dispatchSpy = jasmine.createSpy('dispatchSpy');
const getMoviesSpy = jasmine.createSpy('getMoviesSpy');
const removeErrorStateSpy = jasmine.createSpy('removeErrorStateSpy');
const setErrorStateSpy = jasmine.createSpy('setErrorState');

const bestPictureWinnersApiSpy = {
  saveReview: saveReviewSpy
};

const { markAsSeen, loadMovies, saveReview } = proxyquire(
  '../../../src/actions/movielistActions',
  {
    './ajaxCallActions': {
      beginAjaxCall: beginAjaxCallSpy,
      endAjaxCall: endAjaxCallSpy
    },
    '../api/bestPictureWinnersApi': bestPictureWinnersApiSpy,
    './appActions': {
      removeErrorState: removeErrorStateSpy,
      setErrorState: setErrorStateSpy
    },
    '../requests/get-movies': { getMovies: getMoviesSpy }
  }
);

describe('markAsSeen', () => {
  it('SHOULD create markAsSeen action', () => {
    expect(markAsSeen(moviesData)).toEqual(
      jasmine.objectContaining({ type: 'MARK_AS_SEEN', movies: moviesData })
    );
  });
});
describe('loadMovies', () => {
  describe('GIVEN the call to the API was successful', () => {
    beforeEach(() => {
      getMoviesSpy.and.callFake(() => {
        return Promise.resolve(moviesData);
      });
      mockBeginAjaxCallAction = { type: 'BEGIN_AJAX_CALL', ajaxCalls: 1 };
      mockEndAjaxCallAction = { type: 'END_AJAX_CALL', ajaxCalls: 1 };
      mockRemoveErrorStateAction = { type: 'REMOVE_ERROR-STATE' };
      beginAjaxCallSpy.and.returnValue(mockBeginAjaxCallAction);
      endAjaxCallSpy.and.returnValue(mockEndAjaxCallAction);
      removeErrorStateSpy.and.returnValue(mockRemoveErrorStateAction);
      loadMovies()(dispatchSpy);
    });
    afterEach(() => {
      dispatchSpy.calls.reset();
    });
    it('SHOULD dispatch a beginAjaxCall action', done => {
      setImmediate(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          jasmine.objectContaining(mockBeginAjaxCallAction)
        );
        done();
      });
    });
    it('SHOULD dispatch an endAjaxCall action', done => {
      setImmediate(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          jasmine.objectContaining(mockEndAjaxCallAction)
        );
        done();
      });
    });
  });
  describe('GIVEN the call to the API threw an error', () => {
    beforeEach(() => {
      getMoviesSpy.and.callFake(() => {
        return Promise.reject('API reject error');
      });
      loadMovies()(dispatchSpy).catch(error => {
        caughtError = error;
      });
    });
    it('SHOULD throw an error', done => {
      setImmediate(() => {
        expect(caughtError).toEqual('API reject error');
        done();
      });
    });
  });
});
describe('saveReview', () => {
  describe('GIVEN the call to the API was successful', () => {
    beforeEach(() => {
      saveReviewSpy.and.callFake(() => {
        return Promise.resolve(saveReviewSpy.calls.argsFor(0)[0]);
      });
      saveReview(reviewData)(dispatchSpy);
    });
    afterEach(() => {
      dispatchSpy.calls.reset();
      saveReviewSpy.calls.reset();
    });
    it('SHOULD dispatch a beginAjaxCall action', done => {
      setImmediate(() => {
        saveReview(reviewData)(dispatchSpy);
        expect(beginAjaxCallSpy).toHaveBeenCalledWith(1);
        done();
      });
    });
    it('SHOULD dispatch a saveReviewSuccess action', done => {
      setImmediate(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          jasmine.objectContaining({
            type: 'SAVE_REVIEW',
            review: jasmine.objectContaining(reviewData)
          })
        );
        done();
      });
    });
    it('SHOULD dispatch an endAjaxCall action', done => {
      setImmediate(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(mockEndAjaxCallAction);
        expect(endAjaxCallSpy).toHaveBeenCalledWith(1);
        done();
      });
    });
    it('SHOULD dispatch a removeErrorState action', done => {
      setImmediate(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(mockRemoveErrorStateAction);
        expect(removeErrorStateSpy).toHaveBeenCalled();
        done();
      });
    });
    describe('GIVEN the API call threw an error', () => {
      beforeEach(() => {
        saveReviewSpy.and.callFake(() => {
          return Promise.reject('API rejection');
        });
        saveReview(reviewData)(dispatchSpy).catch(error => {
          caughtError = error;
        });
        mockSetErrorStateAction = { type: 'SET_ERROR_STATE' };
        setErrorStateSpy.and.returnValue(mockSetErrorStateAction);
      });
      it('SHOULD dispatch a setErrorState action', done => {
        setImmediate(() => {
          expect(dispatchSpy).toHaveBeenCalledWith(mockSetErrorStateAction);
          done();
        });
      });
      it('SHOULD dispatch an endAjaxCall action', done => {
        const mockAjaxCallAction = { type: 'END_AJAX_CALL', ajaxCalls: 1 };
        endAjaxCallSpy.and.returnValue(mockAjaxCallAction);
        setImmediate(() => {
          expect(dispatchSpy).toHaveBeenCalledWith(
            jasmine.objectContaining(mockAjaxCallAction)
          );
          done();
        });
      });
    });
  });
});
