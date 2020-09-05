import { shallow, ShallowWrapper } from 'enzyme';

import { rootPage } from 'pages';
import React from 'react';

import Storyteller from '.';

describe('Storyteller', () => {
  const props = {
    onPromptUpdate: jest.fn().mockName('onPromptUpdate'),
    page: rootPage,
  };
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Storyteller {...props} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
