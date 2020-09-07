import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Prompt from '.';

describe('<Prompt>', () => {
  const props = {
    onPromptUpdate: jest.fn().mockName('onPromptUpdate'),
    prompt: {
      key: 'promptKey',
      type: 'input',
    },
  };
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Prompt {...props} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('returns null when there is no prompt', () => {
    wrapper = shallow(<Prompt {...props} prompt={null} />) as ShallowWrapper;

    expect(wrapper.getElement()).toBeNull();
  });

  it('calls onPromptUpdate with input value on confirm', () => {
    const inputValue = 'inputValue';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: inputValue } });

    wrapper.find('button').simulate('click');
    expect(props.onPromptUpdate).toHaveBeenCalledWith(
      props.prompt.key,
      inputValue,
    );
  });
});
