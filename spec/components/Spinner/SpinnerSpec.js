import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../src/components/Spinner';

describe('Spinner', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });
  it('SHOULD display the text "Loading..."', () => {
    expect(wrapper.text()).toContain('Loading...');
  });
});
