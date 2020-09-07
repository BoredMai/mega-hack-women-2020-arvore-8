import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import Shelf from '.';

describe('<Shelf>', () => {
  const items = [
    { icon: 'library/princesa.png', label: 'Princesa', url: 'princesa' },
    {
      disabled: true,
      icon: 'library/mago.png',
      label: 'Mago',
      url: 'mago',
    },
    {
      disabled: true,
      icon: 'library/unicornio.png',
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
