import React, { useState } from 'react';

import Header from 'components/header';
import Storyteller from 'components/storyteller';
import { rootPage } from 'pages';
import { Page, StoredPrompts } from 'types';

import styles from './styles.module.css';

const App = (): JSX.Element => {
  const [page, setPage] = useState<Page>(rootPage);
  const [storedPrompts, setPrompt] = useState<StoredPrompts>({});

  const onPromptUpdate = (key: string, value: string): void => {
    setPrompt({
      ...storedPrompts,
      [key]: value,
    });

    const [nextPage] = page.next;
    setPage(nextPage);
  };

  return (
    <div className={styles.main}>
      <Header />
      <Storyteller onPromptUpdate={onPromptUpdate} page={page} />
    </div>
  );
};

export default App;
