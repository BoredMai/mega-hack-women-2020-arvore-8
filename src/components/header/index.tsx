import React from 'react';
import { User } from 'types';

import styles from './styles.module.css';

interface Props {
  user: User;
}

const Header = (props: Props): JSX.Element => {
  const {
    user: { first, last },
  } = props;

  return (
    <div className={styles.header}>
      <div>Árvore</div>
      <div>
        <span>
          {first} {last}
        </span>
      </div>
    </div>
  );
};

export default Header;
