import { shallow } from 'enzyme';
import About from '../../../src/components/About';
import React from 'react';

describe('About', () => {
  it('should render the About pahe', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.contains(<h1>About</h1>)).toBe(true);
  });
});
