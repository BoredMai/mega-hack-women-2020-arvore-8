import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import LandingPage from '.';

describe('<LandingPage>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
