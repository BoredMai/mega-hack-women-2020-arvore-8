import React, { Fragment, useState } from 'react';

import Item from 'components/shelf/item';
import { ShelfItem } from 'types';

import styles from './styles.module.css';

interface Props {
  items: ShelfItem[];
  onConfirm: (item: ShelfItem) => void;
}
const Shelf = (props: Props): JSX.Element => {
  const [selectedItem, selectItem] = useState<ShelfItem>(null);

  const { items, onConfirm } = props;

  return (
    <Fragment>
      <div className={styles.shelf}>
        {items.map((item) => (
          <Item
            key={item.label}
            item={item}
            isSelected={item === selectedItem}
            onSelect={selectItem}
          />
        ))}
      </div>
      {selectedItem && (
        <button onClick={() => onConfirm(selectedItem)}>
          Criar meu personagem
        </button>
      )}
    </Fragment>
  );
};

export default Shelf;
