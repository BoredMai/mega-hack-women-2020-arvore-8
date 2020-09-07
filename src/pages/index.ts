import { Page } from 'types';

import decorations from '../styles/decorations.module.css';

export const skillPage: Page = {
  background: decorations.castle,
  content: [`Princesa {characterName} era uma excelente...`],
  foreground: decorations.princessWithBird,
};

export const namePage: Page = {
  background: decorations.castle,
  content: [
    `O nome da princesa era...`,
    `Hmm... como era o nome dela mesmo?`,
    `{username}, escolha um nome para a princesa!`,
  ],
  foreground: decorations.princessWithBird,
  next: [skillPage],
  prompt: {
    key: 'characterName',
    type: 'text',
    placeholder: 'Nome da princesa',
  },
};

export const rootPage: Page = {
  background: decorations.castle,
  content: [
    `Era uma vez um reino misterioso e sagrado onde habitavam seres mágicos, um povoado e sua princesa.`,
    `Como ela era amada pelo seu povo!`,
    `Sua inteligência, coragem e lealdade para com seu povo era admirável.`,
  ],
  next: [namePage],
};
