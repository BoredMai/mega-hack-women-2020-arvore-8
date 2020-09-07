import React from 'react';

import styles from './styles.module.css';

const LoadingSpinner = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.loadingSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingSpinner;
