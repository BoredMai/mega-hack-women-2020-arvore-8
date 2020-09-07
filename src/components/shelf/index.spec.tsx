import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Shelf from '.';

describe('<Shelf>', () => {
  const items = [
    { icon: 'princess.png', label: 'Princesa', url: 'princesa' },
    {
      disabled: true,
      icon: 'wizard.png',
      label: 'Mago',
      url: 'mago',
    },
    {
      disabled: true,
      icon: 'unicorn.png',
      label: 'Unicórnio',
      url: 'unicornio',
    },
  ];
  const props = {
    items,
    onConfirm: jest.fn().mockName('onConfirm'),
  };
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Shelf {...props} />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('renders properly with custom label', () => {
    wrapper.setProps({ label: 'Continuar' });
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  describe('with single item', () => {
    beforeEach(() => {
      wrapper.setProps({ items: [items[0]] });
    });

    it('renders properly', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('calls prop on selection confirm', () => {
      wrapper.find('button').simulate('click');

      expect(props.onConfirm).toHaveBeenCalledWith(items[0]);
    });
  });

  describe('with item selection', () => {
    beforeEach(() => {
      wrapper.find('Item').at(0).simulate('select', items[0]);
    });

    it('selects item on item click', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('calls prop on selection confirm', () => {
      wrapper.find('button').simulate('click');

      expect(props.onConfirm).toHaveBeenCalledWith(items[0]);
    });
  });
});
