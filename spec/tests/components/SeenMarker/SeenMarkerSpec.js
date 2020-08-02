import React from 'react';
import { shallow } from 'enzyme';
import { reviewData } from '../../../data';
import SeenMarker from '../../../../src/components/SeenMarker';

const { name: MOVIE_NAME } = reviewData;

describe('SeenMarker', () => {
  let wrapper;
  let onClickSpy = jasmine.createSpy('onClick');
  beforeEach(() => {
    const props = {
      name: MOVIE_NAME,
      onClick: onClickSpy,
      seen: true
    };
    wrapper = shallow(<SeenMarker {...props} />);
  });
  describe('GIVEN the prop "seen" is true', () => {
    it('SHOULD apply the correct class to root span', () => {
      expect(wrapper.first().hasClass('movie-item__marker--seen-true')).toEqual(
        true
      );
    });
  });
  describe('GIVEN the prop "seen" is false', () => {
    beforeEach(() => {
      const props = {
        name: MOVIE_NAME,
        onClick: onClickSpy,
        seen: false
      };
      wrapper = shallow(<SeenMarker {...props} />);
    });
    it('SHOULD apply the class "not-seen" to root span', () => {
      expect(
        wrapper.first().hasClass('movie-item__marker--seen-false')
      ).toEqual(true);
    });
  });
  describe('WHEN the user clicks on SeenMarker', () => {
    beforeEach(() => {
      wrapper.simulate('click');
    });
    it('SHOULD call click handler with correct prop', () => {
      expect(onClickSpy).toHaveBeenCalledWith(MOVIE_NAME);
    });
  });
});
