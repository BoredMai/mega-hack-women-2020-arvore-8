import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import ChoiceItem from '.';

describe('<ChoiceItem>', () => {
  const choice = { icon: 'princesa', label: 'Princesa', url: 'princesa' };
  const props = {
    choice,
    isSelected: false,
    onSelect: jest.fn().mockName('onSelect'),
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ChoiceItem {...props} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('adds class when choice is disabled', () => {
    wrapper.setProps({ choice: { ...choice, disabled: true } });
    expect(wrapper.find('.choiceDisabled')).toHaveLength(1);
  });

  it('adds class when choice is selected', () => {
    wrapper.setProps({ isSelected: true });
    expect(wrapper.find('.choiceSelected')).toHaveLength(1);
  });

  it('calls onSelect on button click', () => {
    wrapper.find('.choice').simulate('click');

    expect(props.onSelect).toHaveBeenCalledWith(choice);
  });
});
