import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const mockReviewForm = (props) => {};

const ReviewForm = proxyquire('../../../../src/components/ReviewSection', {
  '../ReviewForm': mockReviewForm,
}).default;

describe('ReviewSection', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      movie: {},
      actions: {},
    };
    wrapper = shallow(<ReviewForm {...props} />);
  });
  it('SHOULD render a ReviewForm with correct props', () => {
    const expectedProps = {
      movie: {},
      actions: {},
    };
    expect(wrapper.find(mockReviewForm).props()).toEqual(
      jasmine.objectContaining(expectedProps)
    );
  });
});
