import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import App from '.';

let wrapper: ShallowWrapper<unknown>;

describe('<App>', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
