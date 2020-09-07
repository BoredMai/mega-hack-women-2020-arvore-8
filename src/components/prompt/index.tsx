import React, { useState } from 'react';
import { UserPrompt } from 'types';
import styles from './styles.module.css';

export interface Props {
  onPromptUpdate: (key: string, value: string) => void;
  prompt?: UserPrompt;
}

const Prompt = (props: Props): JSX.Element => {
  const [value, setValue] = useState('');
  const { onPromptUpdate, prompt } = props;

  if (!prompt) {
    return null;
  }

  return (
    <div className={styles.prompt}>
      <label htmlFor='promptInput'>{prompt.placeholder}</label>
      <input
        id='promptInput'
        onChange={(e) => setValue(e.target.value)}
        type={prompt.type}
      />
      <button onClick={() => onPromptUpdate(prompt.key, value)}>OK</button>
    </div>
  );
};

export default Prompt;
