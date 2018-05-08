import React from 'react';
import { shallow } from 'enzyme';
import RatingButton from '../../../src/components/RatingButton';

describe('RatingButton', () => {
  const onClickSpy = jasmine.createSpy();
  const onClick = onClickSpy;
  const props = {};
  const wrapper = shallow(<RatingButton />);
});
