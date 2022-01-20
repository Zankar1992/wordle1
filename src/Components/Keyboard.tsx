import React from 'react';
import styles from './keyboard.module.scss';

interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
}

const Keyboard = ({
  keys,
  onKeyPressed
}: KeyboardProps) => {
  const handleInput = (e: any) => {
    onKeyPressed(e.target.textContent);
  }

  const handleEnter = (e: any) => {
    onKeyPressed('ENTER');
  }

  const handleDelete = (e: any) => {
    onKeyPressed('BACKSPACE');
  }
  return (
    <div className={styles.keyboardContainer}>
      {Array.from(Array(10)).map((_, i) => (
        <button key={i} className={styles.key} onClick={handleInput}>
          {keys[i]}
        </button>
      ))}
      <div className={styles.emptyKey}></div>
      {Array.from(Array(10)).map((_, i) => (
        <button key={i + 9} className={styles.key} onClick={handleInput}>
          {keys[i + 9]}
        </button>
      ))}
      <div className={styles.enterKey}></div>
      <button className={styles.key} onClick={handleEnter}>
        ENTER
      </button>
      {Array.from(Array(10)).map((_, i) => (
        <button key={i + 19} className={styles.key} onClick={handleInput}>
          {keys[i + 19]}
        </button>
      ))}
      <button className={styles.deleteKey} onClick={handleDelete}>
        DELETE
      </button>
    </div>
  )
};

export default Keyboard;