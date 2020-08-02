import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const spinnerMock = (props) => {};
const movieListMock = (props) => {};
const progressBarMock = (props) => {};

const ConnectedHomepage = proxyquire('../../../../src/components/Homepage', {
  '../MovieList': movieListMock,
  '../Spinner': spinnerMock,
  '../ProgressBar': progressBarMock,
}).default;

describe('Connected Homepage', () => {
  let initialState, wrapper, props, state;
  const store = configureStore();

  beforeEach(() => {
    initialState = {
      ajaxCalls: 0,
      movies: [
        {
          seen: true,
        },
      ],
    };
    wrapper = shallow(<ConnectedHomepage store={store(initialState)} />);
    props = wrapper.props();
  });

  describe('#mapStateToProps', () => {
    describe('given there are no AJAX calls in progress', () => {
      it('should pass the correct props from state', () => {
        const expectedProps = {
          isLoading: false,
          movies: [{ seen: true }],
        };
        expect(props).toEqual(jasmine.objectContaining(expectedProps));
      });
    });

    describe('GIVEN there is an AJAX call in progress', () => {
      beforeEach(() => {
        initialState = {
          ajaxCalls: 1,
          movies: [
            {
              seen: true,
            },
          ],
        };
        state = store(initialState);
        wrapper = shallow(<ConnectedHomepage store={state} />);
        props = wrapper.props();
      });
      it('SHOULD pass the correct props from state', () => {
        const expectedProps = {
          isLoading: true,
          movies: [{ seen: true }],
        };
        expect(props).toEqual(jasmine.objectContaining(expectedProps));
      });
    });
  });
});
describe('Homepage', () => {
  let props, wrapper, Homepage;
  describe('GIVEN that the page is loading', () => {
    beforeEach(() => {
      props = {
        isLoading: true,
        movies: [{ seen: true }],
      };
      Homepage = ConnectedHomepage.WrappedComponent;
      wrapper = shallow(<Homepage {...props} />);
    });
    it('SHOULD render the Spinner', () => {
      expect(wrapper.find(spinnerMock)).toExist();
    });
    it('SHOULD not render the homepage', () => {
      expect(wrapper.find('.homepage')).not.toExist();
    });
  });
  describe('GIVEN that the page is not loading', () => {
    beforeEach(() => {
      props = {
        isLoading: false,
        movies: [{ seen: true }, { seen: false }],
      };
      Homepage = ConnectedHomepage.WrappedComponent;
      wrapper = shallow(<Homepage {...props} />);
    });
    it('SHOULD not render the Spinner', () => {
      expect(wrapper.find(spinnerMock)).not.toExist();
    });
    it('SHOULD not render the homepage', () => {
      expect(wrapper.find('.homepage')).toExist();
    });
    describe('GIVEN no pictures are marked as "seen"', () => {
      beforeEach(() => {
        props = {
          isLoading: false,
          movies: [{ seen: false }, { seen: false }],
          actions: {},
        };
        Homepage = ConnectedHomepage.WrappedComponent;
        wrapper = shallow(<Homepage {...props} />);
      });
      it('SHOULD pass correct progress level to ProgressBar', () => {
        expect(wrapper.find(progressBarMock).props().progress).toEqual(0);
      });
    });
    describe('GIVEN all pictures are marked as "seen"', () => {
      beforeEach(() => {
        props = {
          isLoading: false,
          movies: [{ seen: true }, { seen: true }],
          actions: {},
        };
        Homepage = ConnectedHomepage.WrappedComponent;
        wrapper = shallow(<Homepage {...props} />);
      });
      it('SHOULD pass correct progress level to ProgressBar', () => {
        expect(wrapper.find(progressBarMock).props().progress).toEqual(100);
      });
    });
    it('SHOULD pass correct progress level to ProgressBar', () => {
      expect(wrapper.find(progressBarMock).props().progress).toEqual(50);
    });
  });
});
