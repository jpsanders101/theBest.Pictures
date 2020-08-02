import React from 'react';
import ConnectedBasePage from '../../../../src/components/BasePage';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import LandingPage from '../../../../src/components/LandingPage';

describe('Connected BasePage', () => {
  it('SHOULD pass the correct props to the BasePage', () => {
    const store = configureStore();
    const initialState = {
      app: { showLandingPage: true },
    };
    const wrapper = shallow(<ConnectedBasePage store={store(initialState)} />);
    expect(wrapper.props().showLandingPage).toEqual(true);
  });
});

describe('BasePage', () => {
  const BasePage = ConnectedBasePage.WrappedComponent;
  describe('GIVEN showLandingPage is true', () => {
    it('SHOULD render a LandingPage component', () => {
      const wrapper = shallow(<BasePage showLandingPage={true} />);
      expect(wrapper.find(LandingPage).exists()).toBe(true);
      expect(wrapper.find('main').exists()).toBe(false);
    });
  });
  describe('GIVEN showLandingPage is false', () => {
    it('SHOULD render main page content', () => {
      const shallowChildMock = <div className="shallowChildMock" />;
      const wrapper = shallow(
        <BasePage showLandingPage={false} children={shallowChildMock} />
      );
      expect(wrapper.find('main').exists()).toBe(true);
      expect(wrapper.find('.shallowChildMock').exists()).toBe(true);
    });
  });
});
