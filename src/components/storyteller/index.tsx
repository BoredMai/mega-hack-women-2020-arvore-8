import Prompt from 'components/prompt';
import React, { useState } from 'react';

import { rootPage } from 'pages';
import { Page, StoredPrompts } from 'types';

import styles from './styles.module.css';

const Storyteller = (): JSX.Element => {
  const [page, setPage] = useState<Page>(rootPage);
  const [storedPrompts, setPrompt] = useState<StoredPrompts>({});

  const { content, prompt } = page;

  const onPromptUpdate = (key: string, value: string): void => {
    setPrompt({
      ...storedPrompts,
      [key]: value,
    });

    const [nextPage] = page.next;
    setPage(nextPage);
  };

  return (
    <div className={styles.storyteller}>
      <p className={styles.storyContent}>{content}</p>
      <Prompt onPromptUpdate={onPromptUpdate} prompt={prompt} />
    </div>
  );
};

export default Storyteller;
