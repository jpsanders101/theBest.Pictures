import React from 'react';
import Homepage from '../../../src/components/Homepage';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { provider } from 'react-redux';

describe('Homepage wrapper', () => {
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
    wrapper = shallow(<Homepage store={store(initialState)} />);
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
        wrapper = shallow(<Homepage store={state} />);
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
