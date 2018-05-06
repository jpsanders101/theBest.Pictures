import { shallow } from 'enzyme';
import Header from '../../../src/components/Header';
import React from 'react';
import { Link } from 'react-router-dom';

describe('Header', () => {
  it('should render two Links', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Link).length).toEqual(2);
  });
});
