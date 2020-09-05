import { shallow, ShallowWrapper } from 'enzyme';

import { rootPage } from 'pages';
import React from 'react';

import Storyteller from '.';

describe('Storyteller', () => {
  const setPageMock = jest.fn().mockName('setPage');
  const setStoryPromptMock = jest.fn().mockName('setStoryPrompt');
  const useStateSpy = jest.spyOn(React, 'useState');

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    useStateSpy
      .mockImplementationOnce(() => [rootPage, setPageMock])
      .mockImplementationOnce(() => [{}, setStoryPromptMock]);
    wrapper = shallow(<Storyteller />) as ShallowWrapper;
  });

  it('renders properly', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });

  it('updates state correctly on promptUpdate', () => {
    const promptKey = 'promptKey';
    const promptValue = 'promptValue';
    wrapper.find('Prompt').simulate('promptUpdate', promptKey, promptValue);

    expect(setStoryPromptMock).toHaveBeenCalledWith({ promptKey: promptValue });
    expect(setPageMock).toHaveBeenCalledWith(rootPage.next[0]);
  });
});
