import { shallow } from 'enzyme';
import ConnectedLoadingButton from '../../../../src/components/LoadingButton';
import React from 'react';
import configureStore from 'redux-mock-store';

describe('Connected LoadingButton', () => {
  it('should map correct state to props', () => {
    const store = configureStore();
    const initialState = {
      ajaxCalls: 0
    };
    const props = {
      store: store(initialState),
      value: 'Seen'
    };
    const wrapper = shallow(<ConnectedLoadingButton {...props} />);
    const expectedProps = {
      value: 'Seen',
      isLoading: false
    };
    expect(wrapper.props()).toEqual(jasmine.objectContaining(expectedProps));
  });
});
describe('LoadingButton', () => {
  describe('given that something is loading', () => {
    const LoadingButton = ConnectedLoadingButton.WrappedComponent;
    const props = {
      value: 'Seen',
      isLoading: true
    };
    const wrapper = shallow(<LoadingButton {...props} />);
    it('should contain the className "loading"', () => {
      expect(wrapper.find('.loading')).toExist();
    });
  });
  describe('given that something is not loading', () => {
    const LoadingButton = ConnectedLoadingButton.WrappedComponent;
    const props = {
      value: 'Seen',
      isLoading: false
    };
    const wrapper = shallow(<LoadingButton {...props} />);
    it('should not contain the className "loading"', () => {
      expect(wrapper.find('.loading')).not.toExist();
    });
  });
});
