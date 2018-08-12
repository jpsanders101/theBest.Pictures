import React from 'react';
import { shallow } from 'enzyme';
import RatingButton from '../../../../src/components/RatingButton';

describe('RatingButton', () => {
  let wrapper, button;
  const onClickSpy = jasmine.createSpy();
  const onEnterSpy = jasmine.createSpy();
  const onLeaveSpy = jasmine.createSpy();

  beforeEach(() => {
    const props = {
      highlighted: false,
      onClick: onClickSpy,
      onMouseEnter: onEnterSpy,
      onMouseLeave: onLeaveSpy,
      value: 1,
      clicked: false
    };
    wrapper = shallow(<RatingButton {...props} />);
    button = wrapper.find('.review-section_review-button');
  });
  it('SHOULD call click handler', () => {
    button.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('SHOULD call onEnter handler', () => {
    wrapper.simulate('mouseEnter');
    expect(onEnterSpy).toHaveBeenCalled();
  });
  it('SHOULD call onLeave handler', () => {
    wrapper.simulate('mouseLeave');
    expect(onLeaveSpy).toHaveBeenCalled();
  });
  it('SHOULD display its value', () => {
    expect(wrapper.text()).toEqual('1');
  });
  describe('GIVEN the mouse has not entered the button', () => {
    it('SHOULD apply the highlighted false class', () => {
      expect(
        button.hasClass('review-section_review-button--highlighted-false')
      ).toBe(true);
    });
  });
  describe('GIVEN the mouse has entered the button', () => {
    beforeEach(() => {
      const props = {
        highlighted: true,
        onClick: onClickSpy,
        onMouseEnter: onEnterSpy,
        onMouseLeave: onLeaveSpy,
        value: 1,
        clicked: false
      };
      wrapper = shallow(<RatingButton {...props} />);
      button = wrapper.find('.review-section_review-button');
    });
    it('SHOULD apply the highlighted true class', () => {
      expect(
        button.hasClass('review-section_review-button--highlighted-true')
      ).toBe(true);
    });
  });
  describe('GIVEN the current button has been clicked', () => {
    beforeEach(() => {
      const props = {
        highlighted: true,
        onClick: onClickSpy,
        onMouseEnter: onEnterSpy,
        onMouseLeave: onLeaveSpy,
        value: 1,
        clicked: '1'
      };
      wrapper = shallow(<RatingButton {...props} />);
      button = wrapper.find('.review-section_review-button');
    });

    it('SHOULD apply the button clicked class', () => {
      expect(button.hasClass('review-section_review-button--clicked')).toBe(
        true
      );
    });
  });
  describe('GIVEN a button other than the current button has been clicked', () => {
    beforeEach(() => {
      const props = {
        highlighted: true,
        onClick: onClickSpy,
        onMouseEnter: onEnterSpy,
        onMouseLeave: onLeaveSpy,
        value: 1,
        clicked: '2'
      };
      wrapper = shallow(<RatingButton {...props} />);
    });

    it('SHOULD not apply the button clicked class', () => {
      expect(wrapper.hasClass('review-section_review-button--clicked')).toBe(
        false
      );
    });
  });
});
