import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import App from '.';

describe('<App>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
