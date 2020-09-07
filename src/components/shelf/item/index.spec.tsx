import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Item from '.';

describe('<Item>', () => {
  const item = { icon: 'princess.png', label: 'Princesa', url: 'princesa' };
  const props = {
    item,
    isSelected: false,
    onSelect: jest.fn().mockName('onSelect'),
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Item {...props} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('adds class when item is disabled', () => {
    wrapper.setProps({ item: { ...item, disabled: true } });
    expect(wrapper.find('.itemDisabled')).toHaveLength(1);
  });

  it('adds class when item is selected', () => {
    wrapper.setProps({ isSelected: true });
    expect(wrapper.find('.itemSelected')).toHaveLength(1);
  });

  it('calls onSelect on button click', () => {
    wrapper.find('.item').simulate('click');

    expect(props.onSelect).toHaveBeenCalledWith(item);
  });
});
