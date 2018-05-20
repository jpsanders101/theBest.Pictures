import { shallow } from 'enzyme';
import MovieList from '../../../../src/components/MovieList';
import React from 'react';
import MovieItem from '../../../../src/components/MovieItem';

describe('MovieList', () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      actions: {},
      movies: [
        { name: 'Wings', seen: true },
        { name: 'The Broadway Melody', seen: false },
        { name: 'All Quiet on the Western Front', seen: false }
      ]
    };
    wrapper = shallow(<MovieList {...props} />);
  });
  describe('given there are unseen pictures', () => {
    it('should disiplay name of first unseen picture in the "Next Up" section', () => {
      expect(wrapper.find('.next-up').text()).toContain('The Broadway Melody');
    });
  });
  describe('given there are no unseen pictures', () => {
    beforeEach(() => {
      props = {
        actions: {},
        movies: [
          { name: 'Wings', seen: true },
          { name: 'The Broadway Melody', seen: true },
          { name: 'All Quiet on the Western Front', seen: true }
        ]
      };
      wrapper = shallow(<MovieList {...props} />);
    });

    it('should not display "Next Up" section', () => {
      expect(wrapper.find('.next-up')).not.toExist();
    });
  });
});
