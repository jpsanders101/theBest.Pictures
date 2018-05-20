import { shallow } from 'enzyme';
import React from 'react';

import About from '../../../src/components/About';

describe('About', () => {
  it('should render the About pahe', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.contains(<h1>About</h1>)).toBe(true);
  });
});
