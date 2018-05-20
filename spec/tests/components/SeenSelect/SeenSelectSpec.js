import React from 'react';
import { shallow } from 'enzyme';
import { movieData } from '../../../data';
import SeenSelect from '../../../../src/components/SeenSelect';

const { MOVIE_NAME } = movieData;

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
    it('SHOULD apply the class "seen" to root span', () => {
      expect(wrapper.first().hasClass('seen')).toEqual(true);
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
      expect(wrapper.first().hasClass('not-seen')).toEqual(true);
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
