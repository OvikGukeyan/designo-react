import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="./assets/shared/desktop/logo-dark.png" alt="logo" />
        </div>
        <nav className={styles.nav_wrapper}>
          <ul>
            <li>OUR COMPANY</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;