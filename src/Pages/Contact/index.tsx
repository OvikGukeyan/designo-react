import React from 'react';
import styles from './Contact.module.scss';
import { Button, LocationsNav } from '../../components';


const Contact: React.FC = () => {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact}>
            <div className={styles.board}>
                <div className={styles.text}>
                    <h1>Contact Us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>
                <div className={styles.form_box}>
                    <Button text='submit'/>
                </div>
            </div>
            <LocationsNav/>
        </div>
    </div>
  )
}

export default Contact;