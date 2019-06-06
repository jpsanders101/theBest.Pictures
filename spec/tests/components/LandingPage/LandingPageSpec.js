// import ConnectedLandingPage from '../../../../src/components/LandingPage';
import { shallow } from 'enzyme';
import React from 'react';

Proxyquire.noCallThru();

const document = {};
const ConnectedLandingPage = Proxyquire(
  '../../../../src/components/LandingPage',
  {},
  { document, console: 'hi' }
).default;
const dismissLandingPageSpy = jasmine.createSpy('dismissLandingPageSpy');
const LandingPage = ConnectedLandingPage.WrappedComponent;
const wrapper = shallow(
  <LandingPage dismissLandingPage={dismissLandingPageSpy} />
);
import Proxyquire from 'proxyquire';

fdescribe('<LandingPage />', () => {
  it('SHOULD render the landing page', () => {
    expect(wrapper.find('.landing-page').exists()).toBe(true);
  });
  describe('GIVEN the "Yes" button is clicked', () => {
    beforeEach(() => {
      wrapper
        .find('.landing-page__button')
        .simulate('click', { preventDefault: () => {} });
    });
    it('SHOULD call the dismissLandingPage prop', () => {
      expect(dismissLandingPageSpy).toHaveBeenCalled();
    });
    it('SHOULD set the seen_landing cookie', () => {
      expect(document.cookie).toEqual('seen_landing=true');
    });
  });
});
