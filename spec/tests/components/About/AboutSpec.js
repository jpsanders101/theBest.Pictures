import About from '../../../../src/components/About';
import React from 'react';
import { shallow } from 'enzyme';

describe('About', () => {
  it('SHOULD render the About page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.exists('.about-page__heading')).toBe(true);
  });
});
