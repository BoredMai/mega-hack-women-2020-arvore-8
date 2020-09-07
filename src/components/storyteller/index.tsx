import cx from 'classnames';
import React, { Fragment, useState } from 'react';

import ContentWrapper from 'components/content-wrapper';
import Prompt from 'components/prompt';
import { rootPage } from 'pages';
import { Page, StoredPrompts } from 'types';

import styles from './styles.module.css';

const Storyteller = (): JSX.Element => {
  const [page, setPage] = useState<Page>(rootPage);
  const [storedPrompts, setPrompt] = useState<StoredPrompts>({});

  const { background, content, foreground, prompt, next } = page;

  const onPromptUpdate = (key: string, value: string): void => {
    setPrompt({
      ...storedPrompts,
      [key]: value,
    });

    const [nextPage] = next;
    setPage(nextPage);
  };

  let nextStep: JSX.Element;
  if (prompt) {
    nextStep = <Prompt onPromptUpdate={onPromptUpdate} prompt={prompt} />;
  } /* istanbul ignore next */ else if (next && next.length === 1) {
    nextStep = <button onClick={() => setPage(next[0])}>Avançar</button>;
  }

  return (
    <Fragment>
      <div className={cx(styles.storyteller, background)}>
        <ContentWrapper>
          <div className={styles.storyContent}>
            {content.map((c, i) => (
              <p key={i}>{c}</p>
            ))}
            {nextStep}
          </div>
        </ContentWrapper>
      </div>
      <div className={foreground} />
    </Fragment>
  );
};

export default Storyteller;
