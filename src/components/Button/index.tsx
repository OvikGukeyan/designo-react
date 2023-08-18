import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <button className={styles.button}>
        <span className={styles.text}> LEARN MORE</span>
        <span className={styles.waves}></span>
    </button>
  )
}

export default Button;