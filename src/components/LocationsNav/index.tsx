import React from 'react';
import styles from './LocationsNav.module.scss';
import { Link } from 'react-router-dom';


const LocationsNav: React.FC = () => {
    return (
        <div className={styles.locations}>
            
            <Link to='/locations'>
                <div className={styles.location_box}>
                    <div className={styles.imd_box}>
                        <div className={`${styles.background} ${styles.passionate}`}></div>
                        <img src="./assets/shared/desktop/illustration-canada.svg" alt="" />
                    </div>

                    <h4>CANADA</h4>
                </div>
            </Link>

            <Link to='/locations'>
                <div className={styles.location_box}>
                    <div className={styles.imd_box}>
                        <div className={`${styles.background} ${styles.resourceful}`}></div>
                        <img src="./assets/shared/desktop/illustration-australia.svg" alt="" />
                    </div>

                    <h4>AUSTRALIA</h4>
                </div>
            </Link>

            <Link to='/locations'>
                <div className={styles.location_box}>
                    <div className={styles.imd_box}>
                        <div className={`${styles.background} ${styles.friendly}`}></div>
                        <img src="./assets/shared/desktop/illustration-united-kingdom.svg" alt="" />
                    </div>

                    <h4>UNITED KINGDOM</h4>
                </div>
            </Link>

        </div>
    )
}

export default LocationsNav;