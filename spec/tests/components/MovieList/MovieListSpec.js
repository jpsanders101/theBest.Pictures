import { shallow } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';
import { moviesData } from '../../../data';

proxyquire.noCallThru();

const mockMovieItem = props => <div>MovieItem</div>;

const MovieList = proxyquire('../../../../src/components/MovieList', {
  '../MovieItem': mockMovieItem
}).default;

describe('MovieList', () => {
  let props, wrapper, moviesProp;
  describe('GIVEN there are unseen pictures', () => {
    beforeEach(() => {
      moviesProp = moviesData.map(movie => {
        return Object.assign({}, movie);
      });
      moviesProp[0].seen = true;

      props = {
        actions: {},
        movies: moviesProp
      };
      wrapper = shallow(<MovieList {...props} />);
    });
    it('SHOULD disiplay name of first unseen picture in the "Next Up" section', () => {
      expect(wrapper.find('.next-up_movie-item').text()).toContain(
        'The Broadway Melody'
      );
    });
  });
  describe('GIVEN there are no unseen pictures', () => {
    beforeEach(() => {
      moviesProp = moviesData.map(movie => {
        return Object.assign({}, movie);
      });
      moviesProp[0].seen = true;
      moviesProp[1].seen = true;
      moviesProp[2].seen = true;
      props = {
        actions: {},
        movies: moviesProp
      };
      wrapper = shallow(<MovieList {...props} />);
    });

    it('SHOULD not display "Next Up" section', () => {
      expect(wrapper.find('.next-up')).not.toExist();
    });
  });
});
