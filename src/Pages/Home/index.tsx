import React from 'react';
import styles from './Home.module.scss';
import { Button, NavBoard } from '../../components';

type HomeType = {
  handleChooseCategory: (newCategory: string) => void;
}

const Home: React.FC<HomeType> = ({handleChooseCategory}) => {
  return (
      <div className={styles.home}>
        <div className={styles.board}>
          <div className={styles.content}>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Button text='Lern more'/>
          </div>
          <img src="./assets/home/desktop/image-hero-phone.png" alt="" />
        </div>
        <NavBoard handleChooseCategory={handleChooseCategory} className='home'/>
        <div className={styles.advantages}>
            <div className={styles.advantage_box}>
                <div className={styles.imd_box}>
                    <div className={`${styles.background} ${styles.passionate}`}></div>
                    <img src="./assets/home/desktop/illustration-passionate.svg" alt="" />
                </div>
                <div className={styles.text_box}>
                    <h4>PASSIONATE</h4>
                    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                </div>
            </div>
            <div className={styles.advantage_box}>
                <div className={styles.imd_box}>
                <div className={`${styles.background} ${styles.resourceful}`}></div>
                    <img src="./assets/home/desktop/illustration-resourceful.svg" alt="" />
                </div>
                <div className={styles.text_box}>
                    <h4>RESOURCEFUL</h4>
                    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
            </div>
            <div className={styles.advantage_box}>
                <div className={styles.imd_box}>
                <div className={`${styles.background} ${styles.friendly}`}></div>
                    <img src="./assets/home/desktop/illustration-friendly.svg" alt="" />
                </div>
                <div className={styles.text_box}>
                    <h4>FRIENDLY</h4>
                    <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Home;