import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import BookItem from '.';

describe('<BookItem>', () => {
  const book = { icon: 'princesa', label: 'Princesa', url: 'princesa' };
  const props = {
    book,
    isSelected: false,
    onSelectBook: jest.fn().mockName('onSelectBook'),
  };

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<BookItem {...props} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('adds class when book is disabled', () => {
    wrapper.setProps({ book: { ...book, disabled: true } });
    expect(wrapper.find('.bookDisabled')).toHaveLength(1);
  });

  it('adds class when book is selected', () => {
    wrapper.setProps({ isSelected: true });
    expect(wrapper.find('.bookSelected')).toHaveLength(1);
  });

  it('calls onSelectBook on button click', () => {
    wrapper.find('.book').simulate('click');

    expect(props.onSelectBook).toHaveBeenCalledWith(book);
  });
});
