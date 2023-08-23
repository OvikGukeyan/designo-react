import React from 'react';
import styles from './NavBoard.module.scss';

const NavBoard: React.FC = () => {
    return (
        <div className={styles.nav_board}>
            <div className={styles.web}>
                <div className={styles.back_web}></div>
                <h2>WEB DESIGN</h2>
                    <a href="/">VIEW PROJECTS <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="" /></a>
            </div>
            <div className={styles.app}>
                <div className={styles.back_app}></div>
                <h2>APP DESIGN</h2>
                <a href="/">VIEW PROJECTS <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="" /></a>
            </div>
            <div className={styles.graphic}>
                <div className={styles.back_graphic}></div>
                <h2>GRAPHIC DESIGN</h2>
                <a href="/">VIEW PROJECTS <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="" /></a>
            </div>
        </div>
    )
}

export default NavBoard;