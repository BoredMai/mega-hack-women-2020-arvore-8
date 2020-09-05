import { Page } from 'types';

export const skillPage: Page = {
  content: `A princesa {nome} era muito conhecida por ser uma exímia...`,
};

export const rootPage: Page = {
  content: `Era uma vez um reino misterioso e sagrado onde habitavam seres mágicos, um povoado e sua princesa! Como ela era amada pelo seu povo! Sua inteligência, coragem e lealdade para com seu povo era admirável.\nSeu nome era...`,
  next: [skillPage],
  prompt: {
    key: 'characterName',
    type: 'text',
    placeholder: 'Nome da princesa',
  },
};
