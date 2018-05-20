import React from 'react';
import { shallow } from 'enzyme';

import proxyquire from 'proxyquire';
proxyquire.noCallThru();

const mockRoute = props => {};
const mockSwitch = props => {};
const mockHeader = props => {};
const mockHomepage = props => {};
const mockAbout = props => {};
const mockMoviePage = props => {};

const Routes = proxyquire('../../../src/components/Routes', {
  'react-router-dom': {
    Route: mockRoute,
    Switch: mockSwitch
  },
  './Header': mockHeader,
  './Homepage': mockHomepage,
  './About': mockAbout,
  './MoviePage': mockMoviePage
}).default;

describe('Routes', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });
  it('SHOULD render a route for the Header with no path argument', () => {
    expect(
      wrapper
        .find(mockRoute)
        .findWhere(route => route.props().component === mockHeader).length
    ).toEqual(1);
  });
  it('SHOULD render Routes inside a Switch with the correct paths', () => {
    const routeData = [
      { exact: true, path: '/', component: mockHomepage },
      { exact: true, path: '/about', component: mockAbout },
      { exact: undefined, path: '/movie/:id', component: mockMoviePage }
    ];
    const switchRoutes = wrapper
      .find(mockSwitch)
      .children()
      .map(routeWrapper => {
        return {
          exact: routeWrapper.props().exact,
          path: routeWrapper.props().path,
          component: routeWrapper.props().component
        };
      });
    expect(switchRoutes).toEqual(jasmine.arrayContaining(routeData));
  });
});
