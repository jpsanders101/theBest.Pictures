import React from 'react';
import ConnectedMoviePage from '../../../../src/components/MoviePage';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReviewSection from '../../../../src/components/ReviewSection';

describe('Connected MoviePage', () => {
  let initialState, wrapper, props, state, initialProps;
  const store = configureStore();

  beforeEach(() => {
    initialState = {
      movies: [
        {
          name: 'Wings',
          awardNumber: 1,
          releaseYear: 1927,
          seen: false
        },
        {
          name: 'The Broadway Melody',
          awardNumber: 2,
          releaseYear: 1928,
          seen: false
        },
        {
          name: 'All Quiet On the Western Front',
          awardNumber: 3,
          releaseYear: 1930,
          seen: false
        }
      ]
    };
    initialProps = { match: { params: { id: '1927' } } };
    wrapper = shallow(
      <ConnectedMoviePage store={store(initialState)} {...initialProps} />
    );
    props = wrapper.props();
  });
  describe('mapStateToProps', () => {
    it('SHOULD pass correct props from state', () => {
      const expectedProps = {
        movie: {
          name: 'Wings',
          awardNumber: 1,
          releaseYear: 1927,
          seen: false
        }
      };
      expect(props).toEqual(jasmine.objectContaining(expectedProps));
    });
  });
  describe('mapDispatchToProps', () => {
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
describe('MoviePage', () => {
  let props, wrapper, MoviePage;
  beforeEach(() => {
    props = {
      movie: {
        name: 'Wings',
        awardNumber: 1,
        releaseYear: 1927,
        seen: false
      },
      actions: {}
    };
    MoviePage = ConnectedMoviePage.WrappedComponent;
    wrapper = shallow(<MoviePage {...props} />);
  });
  it('SHOULD pass the correct props to the ReviewSection', () => {
    expect(wrapper.find(ReviewSection).props()).toEqual(
      jasmine.objectContaining(props)
    );
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
          review: 'Wings was bubbly'
        },
        actions: {}
      };
      MoviePage = ConnectedMoviePage.WrappedComponent;
      wrapper = shallow(<MoviePage {...props} />);
      expect(wrapper.find('.movie-page_review').text()).toContain(
        'Wings was bubbly'
      );
    });
  });
});
