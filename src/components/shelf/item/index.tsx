import React from 'react';

import { ShelfItem } from 'types';

import styles from './styles.module.css';

interface Props {
  item: ShelfItem;
  isSelected: boolean;
  onSelect: (choice: ShelfItem) => void;
}

const Item = (props: Props): JSX.Element => {
  const { item, isSelected, onSelect } = props;
  const { disabled, icon, label } = item;

  const className =
    (isSelected && styles.itemSelected) ||
    (disabled && styles.itemDisabled) ||
    styles.item;
  return (
    <div className={className} onClick={() => onSelect(item)}>
      <img id={`user-choice-${label}`} src={`src/assets/${icon}`} />
      <label htmlFor={`user-choice-${label}`}>{label}</label>
    </div>
  );
};

export default Item;
