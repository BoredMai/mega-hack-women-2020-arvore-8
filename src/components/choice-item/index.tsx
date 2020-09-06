import React from 'react';

import { UserChoice } from 'types';

import styles from './styles.module.css';

interface Props {
  choice: UserChoice;
  isSelected: boolean;
  onSelect: (choice: UserChoice) => void;
}

const ChoiceItem = (props: Props): JSX.Element => {
  const { choice, isSelected, onSelect } = props;
  const { disabled, icon, label } = choice;

  const className =
    (isSelected && styles.choiceSelected) ||
    (disabled && styles.choiceDisabled) ||
    styles.choice;
  return (
    <div className={className} onClick={() => onSelect(choice)}>
      <img id={`user-choice-${label}`} src={`src/assets/${icon}`} />
      <label htmlFor={`user-choice-${label}`}>{label}</label>
    </div>
  );
};

export default ChoiceItem;
