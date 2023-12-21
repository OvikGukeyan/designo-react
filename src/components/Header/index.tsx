import React, { useRef, useState } from 'react';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const navItems = [
    { name: 'OUR COMPANY', link: '/about' }, { name: 'LOCATIONS', link: '/locations' }, { name: 'CONTACT', link: '/contact' }
  ]

  const handleChooseNav = (link: string) => {
    navigate(link);
    setHamburgerOpen(false)
    document.body.style.overflow = ''
  }

  const handleHamburgerClick = () => {
    setHamburgerOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseClick = () => {
    setHamburgerOpen(false)
    document.body.style.overflow = ''
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (navRef.current) {
      if (!navRef.current.contains(e.target as Node)) {
        setHamburgerOpen(false);
        document.body.style.overflow = "";
      }
    }
  }
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src="./assets/shared/desktop/logo-dark.png" alt="logo" />
        </Link>
      </div>
      <nav className={styles.nav_wrapper}>
        <ul>
          {navItems.map(item => (
            <li onClick={() => handleChooseNav(item.link)}>{item.name}</li>
          ))}
        </ul>
      </nav>
      <div className={styles.hamburger_box}>
        {!hamburgerOpen ? <img onClick={handleHamburgerClick} className={styles.hamburger} src="./assets/shared/mobile/icon-hamburger.svg" alt="" /> :
          <img onClick={handleCloseClick} className={styles.hamburger} src="./assets/shared/mobile/icon-close.svg" alt="" />}
      </div>
      {hamburgerOpen && <div onClick={handleOutsideClick} className={styles.nav_bar_mobile_wrapper}>
        <div ref={navRef} className={styles.nav_bar_mobile}>
          <ul>
            {navItems.map(item => (
              <li onClick={() => handleChooseNav(item.link)}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>}
    </header>
  )
}

export default Header;