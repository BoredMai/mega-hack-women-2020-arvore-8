import { Page } from 'types';

import decorations from 'styles/decorations.module.css';

export const libraryPage: Page = {
  background: decorations.library,
  content: [
    `A biblioteca do palácio era tão grande que, para percorrê-la por inteiro, levava-se três dias.`,
    `Um belo dia ela resolveu ir até o final, caminhou os três dias e foi até a última estante. Ao olhar para cima, viu um livro que brilhava e pensou "Será que é mágico?"`,
  ],
  foreground: decorations.princess,
};

export const wizardPage: Page = {
  background: decorations.library,
  choice: {
    icon: 'book.png',
    label: 'Estudiosa',
  },
  content: [
    `Princesa {characterName} amava estudar. Todos do povoado sempre sabiam onde encontrá-la. Quando alguém perguntava:`,
    `- Onde está {characterName}? Ela precisa almoçar!`,
    `O povoado inteiro respondia em peso:`,
    `- Princesa {characterName} está no lugar onde mora sua alegria, a biblioteca do palácio!`,
  ],
  foreground: decorations.princess,
  next: [libraryPage],
};

export const warriorPage: Page = {
  content: [],
  choice: {
    disabled: true,
    icon: 'sword.png',
    label: 'Guerreira',
  },
};

export const skillPage: Page = {
  background: decorations.castle,
  content: [`Princesa {characterName} era uma grande...`],
  foreground: decorations.princessWithBird,
  next: [warriorPage, wizardPage],
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
