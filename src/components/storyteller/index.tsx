import React, { useState } from 'react';

import ContentWrapper from 'components/content-wrapper';
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
      <ContentWrapper>
        <div className={styles.storyContent}>
          <p>{content}</p>
        </div>
        <Prompt onPromptUpdate={onPromptUpdate} prompt={prompt} />
      </ContentWrapper>
    </div>
  );
};

export default Storyteller;
