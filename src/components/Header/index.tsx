import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src="./assets/shared/desktop/logo-dark.png" alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav_wrapper}>
          <ul>

            <li>
              <Link to='/about'>OUR COMPANY</Link>
            </li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;