import React from 'react';
import { shallow } from 'enzyme';
import { reviewData } from '../../../data';
import SeenSelect from '../../../../src/components/SeenSelect';

const { name: MOVIE_NAME } = reviewData;

describe('SeenSelect', () => {
  let wrapper;
  let onClickSpy = jasmine.createSpy('onClick');
  beforeEach(() => {
    const props = {
      name: MOVIE_NAME,
      onClick: onClickSpy,
      seen: true
    };
    wrapper = shallow(<SeenSelect {...props} />);
  });
  describe('GIVEN the prop "seen" is true', () => {
    it('SHOULD apply the correct class to root span', () => {
      expect(wrapper.first().hasClass('movie-item_marker--seen-true')).toEqual(
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
      wrapper = shallow(<SeenSelect {...props} />);
    });
    it('SHOULD apply the class "not-seen" to root span', () => {
      expect(wrapper.first().hasClass('movie-item_marker--seen-false')).toEqual(
        true
      );
    });
  });
  describe('WHEN the user clicks on SeenSelect', () => {
    beforeEach(() => {
      wrapper.simulate('click');
    });
    it('SHOULD call click handler with correct prop', () => {
      expect(onClickSpy).toHaveBeenCalledWith(MOVIE_NAME);
    });
  });
});
