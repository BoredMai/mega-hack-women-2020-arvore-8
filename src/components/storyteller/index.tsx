import cx from 'classnames';
import React, { Fragment, useState } from 'react';

import ContentWrapper from 'components/content-wrapper';
import Prompt from 'components/prompt';
import { rootPage } from 'pages';
import { Page, ShelfItem, StoredPrompts } from 'types';

import styles from './styles.module.css';
import Shelf from 'components/shelf';

interface Props {
  username: string;
}

const Storyteller = (props: Props): JSX.Element => {
  const { username } = props;

  const [page, setPage] = useState<Page>(rootPage);
  const [storedPrompts, setPrompt] = useState<StoredPrompts>({ username });

  const { background, content, foreground, prompt, next } = page;

  const formatContent = (contentString: string): string => {
    let formattedString = contentString;

    Object.keys(storedPrompts).forEach((key) => {
      const regex = new RegExp(`{${key}}`, 'g');
      formattedString = formattedString.replace(regex, storedPrompts[key]);
    });

    return formattedString;
  };

  const onPromptUpdate = (key: string, value: string): void => {
    setPrompt({
      ...storedPrompts,
      [key]: value,
    });

    const [nextPage] = next;
    setPage(nextPage);
  };

  const onShelfConfirm = (item: ShelfItem): void => {
    const nextPage = next.find((p) => p.choice === item) || next[0];
    setPage(nextPage);
  };

  let nextStep: JSX.Element;
  if (prompt) {
    nextStep = <Prompt onPromptUpdate={onPromptUpdate} prompt={prompt} />;
  } /* istanbul ignore else */ else if (next) {
    const items = next.map((page) => page.choice).filter((item) => !!item);
    nextStep = <Shelf items={items} onConfirm={onShelfConfirm} />;
  }

  return (
    <Fragment>
      <div className={cx(styles.storyteller, background)}>
        <ContentWrapper>
          <div className={styles.storyContent}>
            {content.map((c, i) => (
              <p key={i}>{formatContent(c)}</p>
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
