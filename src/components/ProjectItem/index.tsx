import React from 'react';
import styles from './ProjectItem.module.scss';
import { ItemType } from '../../Pages/Projects';

type ProjectItemType = {
    project: ItemType
}

const ProjectItem: React.FC<ProjectItemType> = ({project}) => {
    return (
        <div className={styles.item}>
            <img src={project.imgUrl} alt="" />
            <div className={styles.text}>
                <h5>{project.name}</h5>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default ProjectItem;