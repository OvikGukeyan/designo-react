import React, { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import { ItemLoader, NavBoard, ProjectItem } from '../../components';
import axios from 'axios';

type ProjectsType = {
    handleChooseCategory: (newCategory: string) => void;
    category: string | null;
}

export type ItemType = {
    id: number
    name: string
    description: string
    category: string
    imgUrl: string
}

const Projects: React.FC<ProjectsType> = ({ handleChooseCategory, category }) => {
    const [projects, setProjects] = useState<ItemType[]>();
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        (
            async function () {
                setIsLoading(true)
                try {
                    const { data } = await axios.get(`https://64fa17ff4098a7f2fc156145.mockapi.io/designo?${category !== null ? `category=${category}` : ''}`)
                    setProjects(data)
                    setIsLoading(false)
                } catch (error) {
                    console.log(error)
                    setIsLoading(false)
                }
            }
        )();
        // setIsLoading(true)
        // axios.get(`https://64fa17ff4098a7f2fc156145.mockapi.io/designo?${category !== null ? `category=${category}` : ''}`)
        //     .then(res => setProjects(res.data))

    }, [category])

    console.log(projects, category)

    return (
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
                {!isLoading ? projects?.map((project) => (
                    <ProjectItem project={project} />
                ))
                    :
                    [...Array(6)].map((i) => (
                        <ItemLoader />
                    ))
                }

            </div>
            <div className={styles.nav_wrapper}>
                <NavBoard handleChooseCategory={handleChooseCategory} className={category ? category : 'home'} />

            </div>

        </div>

    )
}

export default Projects;



