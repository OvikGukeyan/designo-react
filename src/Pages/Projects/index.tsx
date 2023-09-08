import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import { NavBoard } from '../../components';
import axios from 'axios';

type ProjectsType = {
    handleChooseCategory: (newCategory: string) => void;
    category: string | null;
}

const Projects: React.FC<ProjectsType> = ({ handleChooseCategory, category }) => {
    const [projects, setProjects] = useState()

    useEffect(()=>{
        axios.get('https://64fa17ff4098a7f2fc156145.mockapi.io/designo')
        .then(res => setProjects(res.data))
    }, [])

    console.log(projects)

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
                    {projects && projects.map((project)=> (
                        <div className={styles.item}>
                        <img src={project.imgUrl} alt="" />
                        <div className={styles.text}>
                            <h5>{project.name}</h5>
                            <p>{project.description}</p>
                        </div>
                    </div>
                    ) )}

                </div>
                <NavBoard handleChooseCategory={handleChooseCategory} className={category ? category : 'home'} />
            </div>

        </div>
    )
}

export default Projects;



