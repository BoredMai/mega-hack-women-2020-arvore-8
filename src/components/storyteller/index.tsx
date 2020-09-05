import Prompt from 'components/prompt';
import React from 'react';
import { Page } from 'types';

import styles from './styles.module.css';

export interface Props {
  onPromptUpdate: (key: string, value: string) => void;
  page: Page;
}

const Storyteller = (props: Props): JSX.Element => {
  const {
    onPromptUpdate,
    page: { content, prompt },
  } = props;

  return (
    <div className={styles.storyteller}>
      <p className={styles.storyContent}>{content}</p>
      <Prompt onPromptUpdate={onPromptUpdate} prompt={prompt} />
    </div>
  );
};

export default Storyteller;
