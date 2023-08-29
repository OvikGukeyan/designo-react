import React from 'react';
import styles from './Footer.module.scss';
import Button from '../Button';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.contact_board}>
                <div className={styles.text_box}>
                    <h3>Let’s talk about your project</h3>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Button  text='GET IN TOUCH'/>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer_head}>
                    <div className={styles.logo}>
                        <img src="./assets/shared/desktop/logo-light.png" alt="logo" />
                    </div>
                    <nav className={styles.nav_wrapper}>
                        <ul>
                            <li>OUR COMPANY</li>
                            <li>LOCATIONS</li>
                            <li>CONTACT</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer_contacts}>
                    <div className={styles.adress}>
                        <p>Designo Central Office <br />3886 Wellington Street <br />Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className={styles.contacts}>
                        <p>Contact Us (Central Office) <br />P : +1 253-863-8967 <br />M : contact@designo.co</p>
                    </div>
                    <div className={styles.social_medias}>
                        <a href="./"><img src="./assets/shared/desktop/icon-facebook.svg" alt="" /></a>
                        <a href="./"><img src="./assets/shared/desktop/icon-youtube.svg" alt="" /></a>
                        <a href="./"><img src="./assets/shared/desktop/icon-twitter.svg" alt="" /></a>
                        <a href="./"><img src="./assets/shared/desktop/icon-pinterest.svg" alt="" /></a>
                        <a href="./"><img src="./assets/shared/desktop/icon-instagram.svg" alt="" /></a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;