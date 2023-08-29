import React from 'react';
import styles from './Home.module.scss';
import { Button, NavBoard, Locations } from '../../components';

type HomeType = {
  handleChooseCategory: (newCategory: string) => void;
}

const Home: React.FC<HomeType> = ({handleChooseCategory}) => {
  return (
    <div className={styles.home_wrapper}>
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
        <Locations/>
      </div>
    </div>
  )
}

export default Home;