import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../../../../src/components/ProgressBar';

describe('ProgressBar', () => {
  it('SHOULD display progress to the correct level', () => {
    const wrapper = shallow(<ProgressBar progress={10} />);
    expect(
      wrapper.find('.progress-bar__filler--completed').props().style.flex
    ).toEqual('0 1 10%');
  });
});
