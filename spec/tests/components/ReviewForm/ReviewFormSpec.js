import React from 'react';
import { shallow } from 'enzyme';
import RatingForm from '../../../../src/components/ReviewForm';
import LoadingButton from '../../../../src/components/LoadingButton';
import RatingButtonContainer from '../../../../src/components/RatingButtonContainer';
import { movieData } from '../../../data';

describe('RatingForm', () => {
  let wrapper;
  let saveReviewSpy;
  const { MOVIE_REVIEW, MOVIE_NAME, MOVIE_RATING, RELEASE_YEAR } = movieData;
  beforeEach(() => {
    saveReviewSpy = jasmine
      .createSpy('saveReview')
      .and.returnValue({ catch: jasmine.createSpy() });
    const props = {
      actions: { saveReview: saveReviewSpy },
      movie: { review: '', name: MOVIE_NAME, releaseYear: RELEASE_YEAR }
    };
    wrapper = shallow(<RatingForm {...props} />);
  });
  it('SHOULD display the movie title', () => {
    expect(wrapper.text()).toContain(MOVIE_NAME);
  });
  describe('GIVEN there is no review for the current movie', () => {
    it('SHOULD render a button which displays "Save"', () => {
      expect(
        wrapper
          .find(LoadingButton)
          .first()
          .props().value
      ).toEqual('Save');
    });
  });
  describe('GIVEN a user has already submitted a review', () => {
    beforeEach(() => {
      const props = {
        actions: { saveReview: saveReviewSpy },
        movie: {
          review: MOVIE_REVIEW,
          name: MOVIE_NAME,
          releaseYear: RELEASE_YEAR
        }
      };
      wrapper = shallow(<RatingForm {...props} />);
    });
    it('SHOULD render a button which displays "Update"', () => {
      expect(
        wrapper
          .find(LoadingButton)
          .first()
          .props().value
      ).toEqual('Update');
    });
  });
  describe('GIVEN a user has clicked a rating button', () => {
    beforeEach(() => {
      wrapper.instance().handleRatingClick(MOVIE_RATING);
    });
    it('SHOULD update state with the rating number', () => {
      expect(wrapper.instance().state.rating).toEqual(MOVIE_RATING);
    });
  });
  describe('GIVEN a user has entered a review', () => {
    beforeEach(() => {
      wrapper
        .find('textarea')
        .first()
        .simulate('change', { target: { value: MOVIE_REVIEW } });
    });
    it('SHOULD update state with the review', () => {
      expect(wrapper.instance().state.review).toEqual(MOVIE_REVIEW);
    });
    describe('WHEN a user submits a review', () => {
      beforeEach(() => {
        wrapper
          .find('form')
          .first()
          .simulate('submit', { preventDefault: jasmine.createSpy() });
      });
      it('SHOULD dispatch the "saveReview" action', () => {
        expect(saveReviewSpy).toHaveBeenCalledWith(
          jasmine.objectContaining({
            rating: undefined,
            review: MOVIE_REVIEW,
            releaseYear: RELEASE_YEAR
          })
        );
      });
    });
  });
});
