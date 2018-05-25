import { saveReview } from '../../../../src/reducers/helpers';
import { moviesData, reviewData, moviesDataAfterReview } from '../../../data';
describe('saveReview', () => {
  it('SHOULD return new movieList with review data', () => {
    expect(saveReview(moviesData, reviewData)).toEqual(moviesDataAfterReview);
  });
});
