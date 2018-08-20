import Filter from '../../../../src/components/Filter';
import React from 'react';
import { shallow } from 'enzyme';

describe('Filter', () => {
  let wrapper;
  let filterSpy = jasmine.createSpy('filterSpy');
  beforeEach(() => {
    const props = {
      filter: 'seen',
      displayText: 'Seen',
      seenFilterOnClickHandler: filterSpy,
      isSelected: false
    };
    wrapper = shallow(<Filter {...props} />);
  });
  it('SHOULD display the correct text', () => {
    expect(wrapper.text()).toContain('Seen');
  });
  it('SHOULD invoke callback on click', () => {
    wrapper.first().simulate('click');
    expect(filterSpy).toHaveBeenCalled();
  });
  describe('GIVEN the filter is selected', () => {
    beforeEach(() => {
      const props = {
        filter: 'seen',
        displayText: 'Seen',
        seenFilterOnClickHandler: filterSpy,
        isSelected: true
      };
      wrapper = shallow(<Filter {...props} />);
    });
    it('SHOULD apply the appropriate class', () => {
      expect(wrapper.find('.movie-list__filter--selected')).toExist();
    });
  });
  describe('GIVEN the filter is not selected', () => {
    it('SHOULD apply the appropriate class', () => {
      expect(wrapper.find('.selected')).not.toExist();
    });
  });
});
