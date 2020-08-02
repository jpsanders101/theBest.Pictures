import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const ratingButtonMock = (props) => {};

const RatingButtonContainer = proxyquire(
  '../../../../src/components/RatingButtonContainer',
  { '../RatingButton': ratingButtonMock }
).default;

describe('RatingButtonContainer', () => {
  let wrapper, ratingButton, ratingButtonValue;
  beforeEach(() => {
    wrapper = shallow(<RatingButtonContainer handleRatingClick={() => {}} />);
  });
  it('SHOULD render five RatingButton components', () => {
    expect(wrapper.find(ratingButtonMock).length).toEqual(5);
  });
  describe('GIVEN that a rating button has not been clicked', () => {
    describe('AND the mouse enters one button', () => {
      beforeEach(() => {
        ratingButton = wrapper.find(ratingButtonMock).at(2);
        ratingButtonValue = ratingButton.props().value;
        ratingButton.simulate('mouseEnter', {
          currentTarget: { dataset: { value: ratingButtonValue } },
        });
      });
      it('SHOULD highlight all buttons up to the one selected', () => {
        expect(wrapper.state().highlightButtonsUpto).toEqual(3);
      });
    });
  });
  describe('GIVEN that a RatingButton has been clicked', () => {
    beforeEach(() => {
      ratingButton = wrapper.find(ratingButtonMock).at(3);
      ratingButtonValue = ratingButton.props().value;
      wrapper
        .find(ratingButtonMock)
        .at(ratingButtonValue)
        .simulate('click', {
          preventDefault: () => {},
          target: { value: ratingButtonValue },
        });
    });
    it('SHOULD pass value of clicked button as "clicked" prop', () => {
      wrapper.find(ratingButtonMock).forEach((button) => {
        expect(button.props().clicked).toEqual(ratingButtonValue);
      });
    });
    describe('AND the mouse enters one button', () => {
      beforeEach(() => {
        ratingButton = wrapper.find(ratingButtonMock).at(1);
        ratingButtonValue = ratingButton.props().value;
        ratingButton.simulate('mouseEnter', {
          target: { value: ratingButtonValue },
        });
      });
      it('SHOULD highlight all buttons up to the one clicked', () => {
        expect(wrapper.state().highlightButtonsUpto).toEqual(4);
      });
    });
    describe('AND given that another RatingButton is clicked', () => {
      beforeEach(() => {
        ratingButton = wrapper.find(ratingButtonMock).at(1);
        ratingButtonValue = ratingButton.props().value;
        ratingButton.simulate('click', {
          preventDefault: () => {},
          target: { value: ratingButtonValue },
        });
      });
      it('SHOULD highlight all buttons up to the second button clicked', () => {
        expect(wrapper.state().highlightButtonsUpto).toEqual(2);
      });
    });
  });
});
