import React, { useState } from 'react';

import Prompt from 'components/prompt';
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
      <div className='content-wrapper'>
        <p className={styles.storyContent}>{content}</p>
        <Prompt onPromptUpdate={onPromptUpdate} prompt={prompt} />
      </div>
    </div>
  );
};

export default Storyteller;
