import React from 'react';
import { Page } from 'types';

import styles from './styles.module.css';

export interface Props {
  page: Page;
}

const Storyteller = (page: Page): JSX.Element => {
  const { content, prompt } = page;

  return (
    <div className={styles.storyteller}>
      <p className={styles.storyContent}>{content}</p>
      {prompt && <input placeholder={prompt.placeholder} type={prompt.type} />}
    </div>
  );
};

export default Storyteller;
