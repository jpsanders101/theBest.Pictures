import proxyquire from 'proxyquire';
import React from 'react';
import { shallow } from 'enzyme';

proxyquire.noCallThru();

const mockLink = (props) => {};

const Header = proxyquire('../../../../src/components/Header', {
  'react-router-dom': { Link: mockLink },
}).default;

describe('Header', () => {
  it('SHOULD render two Links', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(mockLink).length).toEqual(2);
  });
});
