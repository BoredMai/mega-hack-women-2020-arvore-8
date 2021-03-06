import { shallow, ShallowWrapper } from 'enzyme';

import { rootPage, namePage, skillPage } from 'pages';
import React from 'react';

import Storyteller from '.';

describe('Storyteller', () => {
  const setPageMock = jest.fn().mockName('setPage');
  const setStoryPromptMock = jest.fn().mockName('setStoryPrompt');
  const useStateSpy = jest.spyOn(React, 'useState');
  const username = 'Clarice';

  let wrapper: ShallowWrapper;

  describe('without branching', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useStateSpy
        .mockImplementationOnce(() => [rootPage, setPageMock])
        .mockImplementationOnce(() => [{}, setStoryPromptMock]);
      wrapper = shallow(<Storyteller username={username} />) as ShallowWrapper;
    });

    it('renders properly', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('with branching', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useStateSpy
        .mockImplementationOnce(() => [skillPage, setPageMock])
        .mockImplementationOnce(() => [{}, setStoryPromptMock]);
      wrapper = shallow(<Storyteller username={username} />) as ShallowWrapper;
    });

    it('renders properly', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('moves to next page on shelf confirm', () => {
      wrapper.find('Shelf').simulate('confirm', skillPage.next[0]);
      expect(setPageMock).toHaveBeenCalledWith(skillPage.next[0]);
    });
  });

  describe('with prompt', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useStateSpy
        .mockImplementationOnce(() => [namePage, setPageMock])
        .mockImplementationOnce(() => [{ username }, setStoryPromptMock]);
      wrapper = shallow(<Storyteller username={username} />) as ShallowWrapper;
    });

    it('renders properly', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('updates state correctly on promptUpdate', () => {
      const promptKey = 'promptKey';
      const promptValue = 'promptValue';
      wrapper.find('Prompt').simulate('promptUpdate', promptKey, promptValue);

      expect(setStoryPromptMock).toHaveBeenCalledWith({
        promptKey: promptValue,
        username,
      });
      expect(setPageMock).toHaveBeenCalledWith(namePage.next[0]);
    });
  });
});
