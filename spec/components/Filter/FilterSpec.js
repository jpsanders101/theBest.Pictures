import { shallow } from 'enzyme';
import Filter from '../../../src/components/Filter';
import React from 'react';

describe('Filter', () => {
  it('should display the correct text', () => {
    const props = {
      filter: 'seen',
      displayText: 'Seen',
      seenFilterOnClickHandler: () => {},
      isSelected: false
    };
    const wrapper = shallow(<Filter {...props} />);
    expect(wrapper.text()).toContain('Seen');
  });
  it('should invoke callback on click', () => {
    const filterSpy = jasmine.createSpy('filterSpy');

    const props = {
      filter: 'seen',
      displayText: 'Seen',
      seenFilterOnClickHandler: filterSpy,
      isSelected: false
    };
    const wrapper = shallow(<Filter {...props} />);
    wrapper.first().simulate('click');
    expect(filterSpy).toHaveBeenCalled();
  });
  describe('given the filter is selected', () => {
    const props = {
      filter: 'seen',
      displayText: 'Seen',
      seenFilterOnClickHandler: () => {},
      isSelected: true
    };
    const wrapper = shallow(<Filter {...props} />);
    it('should apply the appropriate class', () => {
      expect(wrapper.find('.selected')).toExist();
    });
  });
  describe('given the filter is selected', () => {
    const props = {
      filter: 'seen',
      displayText: 'Seen',
      seenFilterOnClickHandler: () => {},
      isSelected: false
    };
    const wrapper = shallow(<Filter {...props} />);
    it('should apply the appropriate class', () => {
      expect(wrapper.find('.selected')).not.toExist();
    });
  });
});
