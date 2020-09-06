import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import BookItem from 'components/book-item';
import ContentWrapper from 'components/content-wrapper';
import LoadingSpinner from 'components/loading-spinner';

import { Book } from 'types';

import styles from './styles.module.css';

const Library = (): JSX.Element => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [books, setBooks] = useState<Array<Book>>(null);
  const [selection, selectBook] = useState<Book>(null);

  if (!books) {
    /**
     * Replace setTimeout with library content fetch
     */
    setTimeout(() => {
      setBooks([
        { icon: 'princesa', label: 'Princesa', url: 'princesa' },
        { disabled: true, icon: 'mago', label: 'Mago', url: 'mago' },
        {
          disabled: true,
          icon: 'unicornio',
          label: 'Unicórnio',
          url: 'unicornio',
        },
      ]);
    }, 2000);

    return <LoadingSpinner />;
  }

  const navigateToStory = () => {
    history.push(`${path}/${selection.url}`);
  };

  return (
    <ContentWrapper>
      <h1>Colha uma História</h1>
      <p>Muito bem, Clarice: Você está a um passo de ser uma grande autora!</p>
      <p>Agora, vamos escolher o personagem para a sua história?</p>
      <div className={styles.bookshelf}>
        {books.map((book) => (
          <BookItem
            key={book.label}
            book={book}
            isSelected={book === selection}
            onSelectBook={selectBook}
          />
        ))}
      </div>
      {selection && (
        <button onClick={navigateToStory}>Criar meu personagem</button>
      )}
    </ContentWrapper>
  );
};

export default Library;
