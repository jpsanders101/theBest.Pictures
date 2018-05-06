import React from 'react';
import ConnectedHomepage from '../../../src/components/Homepage';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Spinner from '../../../src/components/Spinner';
import MovieList from '../../../src/components/MovieList';
import ProgressBar from '../../../src/components/ProgressBar';

describe('Connected Homepage', () => {
  let initialState, wrapper, props, state;
  const store = configureStore();

  beforeEach(() => {
    initialState = {
      ajaxCalls: 0,
      movies: [
        {
          seen: true
        }
      ]
    };
    wrapper = shallow(<ConnectedHomepage store={store(initialState)} />);
    props = wrapper.props();
  });

  describe('#mapStateToProps', () => {
    describe('given there are no AJAX calls in progress', () => {
      it('should pass the correct props from state', () => {
        const expectedProps = {
          isLoading: false,
          movies: [{ seen: true }]
        };
        expect(props).toEqual(jasmine.objectContaining(expectedProps));
      });
    });

    describe('given there is an AJAX call in progress', () => {
      beforeEach(() => {
        initialState = {
          ajaxCalls: 1,
          movies: [
            {
              seen: true
            }
          ]
        };
        state = store(initialState);
        wrapper = shallow(<ConnectedHomepage store={state} />);
        props = wrapper.props();
      });
      it('should pass the correct props from state', () => {
        const expectedProps = {
          isLoading: true,
          movies: [{ seen: true }]
        };
        expect(props).toEqual(jasmine.objectContaining(expectedProps));
      });
    });
  });
  describe('#mapDispatchToProps', () => {
    const expectedActionCreators = [
      'markAsSeen',
      'loadMoviesSuccess',
      'loadMovies',
      'saveReviewSuccess',
      'saveReview'
    ];
    expectedActionCreators.forEach(actionCreator => {
      it(`passes ${actionCreator} to props`, () => {
        const actionCreators = Object.keys(props.actions);
        expect(actionCreators).toContain(actionCreator);
      });
    });
  });
});
describe('Homepage', () => {
  let props, wrapper, Homepage;
  describe('given that the page is loading', () => {
    beforeEach(() => {
      props = {
        isLoading: true,
        movies: [{ seen: true }],
        actions: {}
      };
      Homepage = ConnectedHomepage.WrappedComponent;
      wrapper = shallow(<Homepage {...props} />);
    });
    it('should render the Spinner', () => {
      expect(wrapper.find(Spinner)).toExist();
    });
    it('should not render the homepage', () => {
      expect(wrapper.find('.homepage')).not.toExist();
    });
  });
  describe('given that the page is not loading', () => {
    beforeEach(() => {
      props = {
        isLoading: false,
        movies: [{ seen: true }, { seen: false }],
        actions: {}
      };
      Homepage = ConnectedHomepage.WrappedComponent;
      wrapper = shallow(<Homepage {...props} />);
    });
    it('should not render the Spinner', () => {
      expect(wrapper.find(Spinner)).not.toExist();
    });
    it('should not render the homepage', () => {
      expect(wrapper.find('.homepage')).toExist();
    });
    describe('given no pictures are marked as "seen"', () => {
      beforeEach(() => {
        props = {
          isLoading: false,
          movies: [{ seen: false }, { seen: false }],
          actions: {}
        };
        Homepage = ConnectedHomepage.WrappedComponent;
        wrapper = shallow(<Homepage {...props} />);
      });
      it('should pass correct progress level to ProgressBar', () => {
        expect(wrapper.find(ProgressBar).props().progress).toEqual(0);
      });
    });
    describe('given all pictures are marked as "seen"', () => {
      beforeEach(() => {
        props = {
          isLoading: false,
          movies: [{ seen: true }, { seen: true }],
          actions: {}
        };
        Homepage = ConnectedHomepage.WrappedComponent;
        wrapper = shallow(<Homepage {...props} />);
      });
      it('should pass correct progress level to ProgressBar', () => {
        expect(wrapper.find(ProgressBar).props().progress).toEqual(100);
      });
    });
    it('should pass correct progress level to ProgressBar', () => {
      expect(wrapper.find(ProgressBar).props().progress).toEqual(50);
    });
  });
});
