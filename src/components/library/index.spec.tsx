import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import Library from '.';

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn().mockName('useHistory'),
  useRouteMatch: jest.fn().mockName('useRouteMatch'),
}));
jest.useFakeTimers();

describe('<Library>', () => {
  const book = { icon: 'princesa', label: 'Princesa', url: 'princesa' };
  const history = { push: jest.fn() };
  const path = 'path';
  let wrapper: ShallowWrapper;

  (useHistory as jest.Mock).mockReturnValue(history);
  (useRouteMatch as jest.Mock).mockReturnValue({ path });

  it('renders loading state', () => {
    wrapper = shallow(<Library />) as ShallowWrapper;
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  describe('after fetching data', () => {
    beforeEach(() => {
      wrapper = shallow(<Library />) as ShallowWrapper;
      jest.runAllTimers();
    });

    it('renders properly', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('navigates to selected book on confirm', () => {
      wrapper.find('Shelf').simulate('confirm', book);

      expect(history.push).toHaveBeenCalledWith(`${path}/${book.url}`);
    });
  });
});
