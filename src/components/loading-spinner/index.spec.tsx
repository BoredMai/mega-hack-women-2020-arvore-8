import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import LoadingSpinner from '.';

describe('<LoadingSpinner>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingSpinner />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
