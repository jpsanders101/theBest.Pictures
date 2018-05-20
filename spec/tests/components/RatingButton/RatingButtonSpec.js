import React from 'react';
import { shallow } from 'enzyme';
import RatingButton from '../../../../src/components/RatingButton';

describe('RatingButton', () => {
  let wrapper;
  const onClickSpy = jasmine.createSpy();
  const onEnterSpy = jasmine.createSpy();
  const onLeaveSpy = jasmine.createSpy();

  beforeEach(() => {
    const props = {
      highlighted: false,
      onClick: onClickSpy,
      onMouseEnter: onEnterSpy,
      onMouseLeave: onLeaveSpy,
      value: 1
    };
    wrapper = shallow(<RatingButton {...props} />);
  });

  it('SHOULD call click handler', () => {
    wrapper.simulate('click');
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
});
