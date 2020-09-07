import React, { Fragment, useState } from 'react';

import Item from 'components/shelf/item';
import { ShelfItem } from 'types';

import styles from './styles.module.css';

interface Props {
  items: ShelfItem[];
  onConfirm: (item: ShelfItem) => void;
  label?: string;
}

const Shelf = ({ items, label = 'Avançar', onConfirm }: Props): JSX.Element => {
  if (items.length <= 1) {
    return <button onClick={() => onConfirm(items[0])}>{label}</button>;
  }

  const [selectedItem, selectItem] = useState<ShelfItem>(null);

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
        <button onClick={() => onConfirm(selectedItem)}>{label}</button>
      )}
    </Fragment>
  );
};

export default Shelf;
