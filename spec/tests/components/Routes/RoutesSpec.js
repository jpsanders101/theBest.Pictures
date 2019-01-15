import React from 'react';
import { shallow } from 'enzyme';
import { Route, Switch } from 'react-router-dom';
import Routes from '../../../../src/components/Routes';
import Homepage from '../../../../src/components/Homepage';
import About from '../../../../src/components/About';
import MoviePage from '../../../../src/components/MoviePage';


describe('<Routes/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });
  it('SHOULD render <Switch/> with three <Routes/>', () => {
    expect(wrapper.find(Switch).exists()).toBe(true)
  });
  it('SHOULD render <Route /> components with correct props', () => {
    const routeComponents = wrapper.find(Route);
    const expectedRoutes = [
      { exact: true, path: '/', component: Homepage },
      { exact: true, path: '/about', component: About },
      { exact: undefined, path: '/movie/:id', component: MoviePage }
    ];
    routeComponents.forEach((routeComponent, nthRoute) => {
      const expectedProps = expectedRoutes[nthRoute]
      for (let prop in expectedProps) {
        expect(routeComponent.props()[prop]).toEqual(expectedProps[prop]);
      }
    })

  })
});
