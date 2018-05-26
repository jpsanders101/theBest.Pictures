import proxyquire from 'proxyquire';
import React from 'react';
import { shallow } from 'enzyme';

proxyquire.noCallThru();

const mockFilter = props => {};

const FilterPanel = proxyquire('../../../../src/components/FilterPanel', {
  '../Filter': mockFilter
}).default;

describe('FilterPanel', () => {
  let props, wrapper;
  describe('GIVEN that "seen" is selected', () => {
    beforeEach(() => {
      props = {
        seenFilterOnClickHandler: () => {},
        filter: 'seen'
      };
      wrapper = shallow(<FilterPanel {...props} />);
    });
    it('SHOULD pass correct isSelected props to Filter components', () => {
      expect(wrapper.find('[filter="seen"]').props().isSelected).toEqual(true);
      expect(wrapper.find('[filter="unseen"]').props().isSelected).toEqual(
        false
      );
    });
  });
  describe('GIVEN that "unseen" is selected', () => {
    beforeEach(() => {
      props = {
        seenFilterOnClickHandler: () => {},
        filter: 'unseen'
      };
      wrapper = shallow(<FilterPanel {...props} />);
    });
    it('SHOULD pass correct isSelected props to Filter components', () => {
      expect(wrapper.find('[filter="seen"]').props().isSelected).toEqual(false);
      expect(wrapper.find('[filter="unseen"]').props().isSelected).toEqual(
        true
      );
    });
  });
});
