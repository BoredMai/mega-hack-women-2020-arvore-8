import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ChoiceItem from 'components/choice-item';
import ContentWrapper from 'components/content-wrapper';
import LoadingSpinner from 'components/loading-spinner';

import { UserChoice } from 'types';

import styles from './styles.module.css';
import backgrounds from 'styles/backgrounds.module.css';

const Library = (): JSX.Element => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [books, setBooks] = useState<Array<UserChoice>>(null);
  const [selection, selectBook] = useState<UserChoice>(null);

  if (!books) {
    /**
     * Replace setTimeout with library content fetch
     */
    setTimeout(() => {
      setBooks([
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
      ]);
    }, 2000);

    return (
      <div className={backgrounds.grass}>
        <LoadingSpinner />
      </div>
    );
  }

  const navigateToStory = () => {
    history.push(`${path}/${selection.url}`);
  };

  return (
    <div className={backgrounds.grass}>
      <ContentWrapper>
        <h1>Colha uma História</h1>
        <p>
          Muito bem, Clarice: Você está a um passo de ser uma grande autora!
        </p>
        <p>Agora, vamos escolher o personagem para a sua história?</p>
        <div className={styles.bookshelf}>
          {books.map((book) => (
            <ChoiceItem
              key={book.label}
              choice={book}
              isSelected={book === selection}
              onSelect={selectBook}
            />
          ))}
        </div>
        {selection && (
          <button onClick={navigateToStory}>Criar meu personagem</button>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Library;
