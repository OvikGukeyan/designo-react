import React from 'react';
import styles from './Projects.module.scss';
import { NavBoard } from '../../components';

type ProjectsType = {
    handleChooseCategory: (newCategory: string) => void;
    category: string | null;
}

const Projects: React.FC<ProjectsType> = ({ handleChooseCategory, category }) => {
    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.projects}>
                {category === 'web_design' &&
                    <div className={`${styles.title_board} ${styles[category ? category : '']}`}>
                        <h1>Web Design</h1>
                        <p>We build websites that serve as powerful marketing tools <br />
                            and bring memorable brand experiences.</p>
                    </div>}
                {category === 'app_design' &&
                    <div className={`${styles.title_board} ${styles[category ? category : '']}`}>
                        <h1>App Design</h1>
                        <p>Our mobile designs bring intuitive digital solutions
                            to your customers right at their fingertips.</p>
                    </div>}
                {category === 'graphic_design' &&
                    <div className={`${styles.title_board} ${styles[category ? category : '']}`}>
                        <h1>Graphic Design</h1>
                        <p>We deliver eye-catching branding materials that are
                            tailored to meet your business objectives.
                        </p>
                    </div>}
                <div className={styles.projects_items}>
                    <div className={styles.item}>
                        <img src="./assets/web-design/desktop/image-express.jpg" alt="" />
                        <div className={styles.text}>
                            <h5>EXPRESS</h5>
                            <p>A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="./assets/web-design/desktop/image-express.jpg" alt="" />
                        <div className={styles.text}>
                            <h5>EXPRESS</h5>
                            <p>A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img src="./assets/web-design/desktop/image-express.jpg" alt="" />
                        <div className={styles.text}>
                            <h5>EXPRESS</h5>
                            <p>A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>

                </div>
                <NavBoard handleChooseCategory={handleChooseCategory} className={category ? category : 'home'} />
            </div>

        </div>
    )
}

export default Projects;