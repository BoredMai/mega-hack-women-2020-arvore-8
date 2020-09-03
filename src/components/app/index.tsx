import React, { useState } from 'react';

import Header from 'components/header';
import Storyteller from 'components/storyteller';
import { rootPage } from 'pages';
import { Page } from 'types';

import styles from './styles.module.css';

const App = (): JSX.Element => {
  const [page] = useState<Page>(rootPage);

  return (
    <div className={styles.main}>
      <Header />
      <Storyteller {...page} />
    </div>
  );
};

export default App;
