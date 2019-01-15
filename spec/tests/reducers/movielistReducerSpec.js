import { moviesData } from '../../data';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const saveReviewSpy = jasmine.createSpy('saveReviewSpy');
const helpersMock = { saveReview: saveReviewSpy };

const movielistReducer = proxyquire('../../../src/reducers/movielistReducer', {
  './helpers': helpersMock
}).default;

const actionMovies = moviesData.map(movie => {
  return { ...movie };
});

describe('Movie List Reducer', () => {
  describe('GIVEN a MARK_AS_SEEN action was dispatched', () => {
    it('SHOULD return correctly updated state', () => {
      expect(
        movielistReducer(moviesData, {
          type: 'MARK_AS_SEEN',
          movies: actionMovies
        })
      ).toEqual(actionMovies);
    });
  });
  describe('GIVEN a LOAD_MOVIES action was dispatched', () => {
    it('SHOULD return correctly updated state', () => {
      expect(
        movielistReducer(moviesData, {
          type: 'LOAD_MOVIES',
          movies: actionMovies
        })
      ).toBe(actionMovies);
    });
  });
  describe('GIVEN a SAVE_REVIEW action was dispatched', () => {
    it('SHOULD return correctly updated state', () => {
      movielistReducer(moviesData, {
        type: 'SAVE_REVIEW',
        review: 'Review'
      });
      expect(saveReviewSpy).toHaveBeenCalledWith(moviesData, 'Review');
    });
  });
  describe('GIVEN an action of some other type has been dispatched', () => {
    it('SHOULD return state without update', () => {
      expect(
        movielistReducer(moviesData, {
          type: 'SOMETHING_ELSE',
          data: 'something else'
        })
      ).toBe(moviesData);
    });
  });
});
