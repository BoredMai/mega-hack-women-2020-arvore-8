import { shallow, ShallowWrapper } from 'enzyme';

import React from 'react';

import Header from '.';

describe('Header', () => {
  const user = {
    first: 'Clarice',
    last: 'Lispector',
  };
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Header user={user} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
