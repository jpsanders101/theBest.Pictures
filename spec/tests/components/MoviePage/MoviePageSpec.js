import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReviewSection from '../../../../src/components/ReviewSection';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const reviewSectionMock = (props) => {};
const spinnerMock = (props) => {};

const ConnectedMoviePage = proxyquire('../../../../src/components/MoviePage', {
  '../ReviewSection': reviewSectionMock,
  '../Spinner': spinnerMock,
}).default;

const store = configureStore();

let initialState, state, props, expectedProps, wrapper;

describe('Connected MoviePage', () => {
  beforeEach(() => {
    initialState = {
      movies: [
        {
          name: 'Wings',
          awardNumber: 1,
          releaseYear: 1927,
          seen: false,
        },
        {
          name: 'The Broadway Melody',
          awardNumber: 2,
          releaseYear: 1928,
          seen: false,
        },
        {
          name: 'All Quiet On the Western Front',
          awardNumber: 3,
          releaseYear: 1930,
          seen: false,
        },
      ],
      ajaxCalls: 0,
    };
    props = { match: { params: { id: '1927' } } };
    wrapper = shallow(
      <ConnectedMoviePage store={store(initialState)} {...props} />
    );
  });
  describe('mapStateToProps', () => {
    it('SHOULD pass correct props from state', () => {
      expectedProps = {
        movie: {
          name: 'Wings',
          awardNumber: 1,
          releaseYear: 1927,
          seen: false,
        },
        isLoading: false,
      };
      expect(wrapper.props()).toEqual(jasmine.objectContaining(expectedProps));
    });
  });
  describe('mapDispatchToProps', () => {
    const expectedActionCreators = [
      'markAsSeen',
      'loadMoviesSuccess',
      'loadMovies',
      'saveReviewSuccess',
      'saveReview',
    ];
    it('SHOULD pass correct action creators to props', () => {
      expect(Object.keys(wrapper.props().actions)).toEqual(
        expectedActionCreators
      );
    });
  });
});
describe('MoviePage', () => {
  beforeEach(() => {
    props = {
      movie: {
        name: 'Wings',
        awardNumber: 1,
        releaseYear: 1927,
        seen: false,
      },
      actions: {},
      isLoading: false,
    };
    expectedProps = {
      movie: {
        name: 'Wings',
        awardNumber: 1,
        releaseYear: 1927,
        seen: false,
      },
      actions: {},
    };
    let MoviePage = ConnectedMoviePage.WrappedComponent;
    wrapper = shallow(<MoviePage {...props} />);
  });
  it('SHOULD pass the correct props to the ReviewSection', () => {
    expect(wrapper.find(reviewSectionMock).props()).toEqual(expectedProps);
  });
  describe('GIVEN there is no review for the movie', () => {
    it('SHOULD not display "Your Review', () => {
      expect(wrapper.find('.movie-review')).not.toExist();
    });
  });
  describe('GIVEN there is a review for the movie', () => {
    it('SHOULD display "Your Review', () => {
      props = {
        movie: {
          name: 'Wings',
          awardNumber: 1,
          releaseYear: 1927,
          seen: false,
          review: 'Wings was bubbly',
        },
        actions: {},
        isLoading: false,
      };
      let MoviePage = ConnectedMoviePage.WrappedComponent;
      wrapper = shallow(<MoviePage {...props} />);
      expect(wrapper.find('.movie-page_review').text()).toContain(
        'Wings was bubbly'
      );
    });
  });
  describe('GIVEN there are no AJAX calls in progress', () => {
    it('SHOULD not display a Spinner', () => {
      expect(wrapper.find(spinnerMock)).not.toExist();
    });
    it('SHOULD display page content', () => {
      expect(wrapper.find('.movie-page_content')).toExist();
    });
  });
  describe('GIVEN there is an AJAX call in progress', () => {
    beforeEach(() => {
      props = {
        movie: {
          name: 'Wings',
          awardNumber: 1,
          releaseYear: 1927,
          seen: false,
        },
        actions: {},
        isLoading: true,
      };
      let MoviePage = ConnectedMoviePage.WrappedComponent;
      wrapper = shallow(<MoviePage {...props} />);
    });
    it('SHOULD display a Spinner', () => {
      expect(wrapper.find(spinnerMock)).toExist();
    });
    it('SHOULD not display page content', () => {
      expect(wrapper.find('.movie-page_content')).not.toExist();
    });
  });
});
