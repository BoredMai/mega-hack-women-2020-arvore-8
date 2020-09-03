import React from 'react';

import styles from './styles.module.css';

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div>Árvore</div>
      <div>
        <span>X</span>
        <span>Maianne Ribeiro</span>
      </div>
    </div>
  );
};

export default Header;
