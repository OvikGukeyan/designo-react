import React from 'react';
import styles from './Footer.module.scss';
import Button from '../Button';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrapper}>
        <div className={styles.contact_board}>
            <div className={styles.text_box}>
                <h3>Let’s talk about your project</h3>
                <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <Button/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Footer;