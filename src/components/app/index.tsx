import React from 'react';

import Header from 'components/header';
import Storyteller from 'components/storyteller';

import styles from './styles.module.css';

const App = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Header />
      <Storyteller />
    </div>
  );
};

export default App;
