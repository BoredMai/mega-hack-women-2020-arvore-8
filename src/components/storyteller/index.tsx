import React from 'react';
import { Page } from 'types';

export interface Props {
  page: Page;
}

const Storyteller = (page: Page): JSX.Element => {
  const { content } = page;

  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default Storyteller;
