import React from 'react';
import styles from './Button.module.scss';

type ButtonType = {
  text: string
}

const Button: React.FC<ButtonType> = ({text}) => {
  return (
    <button className={styles.button}>
        <span className={styles.text}> {text}</span>
        <span className={styles.waves}></span>
    </button>
  )
}

export default Button;