import { shallow, ShallowWrapper } from 'enzyme';

import React from 'react';

import Header from '.';

describe('Header', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
