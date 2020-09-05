import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { rootPage } from 'pages';
import App from '.';

describe('<App>', () => {
  const setPageMock = jest.fn().mockName('setPage');
  const setStoryPromptMock = jest.fn().mockName('setStoryPrompt');
  const useStateSpy = jest.spyOn(React, 'useState');
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    useStateSpy
      .mockImplementationOnce(() => [rootPage, setPageMock])
      .mockImplementationOnce(() => [{}, setStoryPromptMock]);
    wrapper = shallow(<App />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('updates state correctly on promptUpdate', () => {
    const promptKey = 'promptKey';
    const promptValue = 'promptValue';
    wrapper
      .find('Storyteller')
      .simulate('promptUpdate', promptKey, promptValue);

    expect(setStoryPromptMock).toHaveBeenCalledWith({ promptKey: promptValue });
    expect(setPageMock).toHaveBeenCalledWith(rootPage.next[0]);
  });
});
