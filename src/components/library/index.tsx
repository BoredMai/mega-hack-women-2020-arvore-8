import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ContentWrapper from 'components/content-wrapper';
import LoadingSpinner from 'components/loading-spinner';
import Shelf from 'components/shelf';

import { ShelfItem } from 'types';

import decorations from 'styles/decorations.module.css';

const Library = (): JSX.Element => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [books, setBooks] = useState<Array<ShelfItem>>(null);

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
      <div className={decorations.grass}>
        <LoadingSpinner />
      </div>
    );
  }

  const navigateToStory = (selectedItem: ShelfItem) => {
    history.push(`${path}/${selectedItem.url}`);
  };

  return (
    <div className={decorations.grass}>
      <ContentWrapper>
        <h1>Colha uma História</h1>
        <p>
          Muito bem, Clarice: Você está a um passo de ser uma grande autora!
        </p>
        <p>Agora, vamos escolher o personagem para a sua história?</p>
        <Shelf items={books} onConfirm={navigateToStory} />
      </ContentWrapper>
    </div>
  );
};

export default Library;
