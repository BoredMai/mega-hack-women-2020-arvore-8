import { shallow, ShallowWrapper } from 'enzyme';

import { rootPage } from 'pages';
import React from 'react';

import Storyteller from '.';

describe('Storyteller', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Storyteller {...rootPage} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
