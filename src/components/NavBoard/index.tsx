import React from 'react';
import styles from './NavBoard.module.scss';
import { useLocation } from 'react-router-dom';

type NavBoardType = {
    className: string
    handleChooseCategory: (newCategory: string) => void;

}

const NavBoard: React.FC<NavBoardType> = ({ className, handleChooseCategory}) => {
    const location = useLocation();

    return (
        <div className={`${styles.nav_board} ${styles[className]}`}>
            <div onClick={() => handleChooseCategory('web_design')} className={styles.web}>
                <div className={styles.back_web}></div>
                <h2>WEB DESIGN</h2>
                <a href="/">VIEW PROJECTS <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="" /></a>
            </div>
            <div onClick={() => handleChooseCategory('app_design')} className={styles.app}>
                <div className={styles.back_app}></div>
                <h2>APP DESIGN</h2>
                <a href="/">VIEW PROJECTS <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="" /></a>
            </div>
            <div onClick={() => handleChooseCategory('graphic_design')} className={styles.graphic}>
                <div className={styles.back_graphic}></div>
                <h2>GRAPHIC DESIGN</h2>
                <a href="/">VIEW PROJECTS <img src="./assets/shared/desktop/icon-right-arrow.svg" alt="" /></a>
            </div>
        </div>
    )
}

export default NavBoard;