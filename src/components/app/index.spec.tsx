import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import App from '.';

let wrapper: ShallowWrapper;

describe('<App>', () => {
  beforeEach(() => {
    wrapper = shallow(<App />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
