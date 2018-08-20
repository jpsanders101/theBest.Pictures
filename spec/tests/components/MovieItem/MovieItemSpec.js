import { shallow } from 'enzyme';
import SeenMarker from '../../../../src/components/SeenMarker';
import React from 'react';
import { Link } from 'react-router-dom';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const seenMarkerMock = props => {};
const linkMock = props => {};
const onClick = () => {};

const MovieItem = proxyquire('../../../../src/components/MovieItem', {
  '../SeenMarker': seenMarkerMock,
  'react-router-dom': { Link: linkMock }
}).default;

describe('MovieItem', () => {
  let props, wrapper, expectedProps;
  beforeEach(() => {
    props = {
      name: 'Wings',
      releaseYear: 1927,
      seen: false,
      onClick: onClick
    };
    expectedProps = {
      name: 'Wings',
      onClick: onClick,
      seen: false
    };
    wrapper = shallow(<MovieItem {...props} />);
  });
  it('SHOULD render a MovieItem', () => {
    expect(wrapper.find('.movie-list__movie-item').length).toEqual(1);
  });
  it('SHOULD pass correct props to SeenMarker', () => {
    expect(wrapper.find(seenMarkerMock).props()).toEqual(expectedProps);
  });
  it('SHOULD pass correct props to Link', () => {
    expect(wrapper.find(linkMock).props().to).toEqual('/movie/1927');
  });
  it('SHOULD pass correct picture title to the Link', () => {
    expect(
      wrapper
        .find(linkMock)
        .children()
        .text()
    ).toEqual('Wings');
  });
});
