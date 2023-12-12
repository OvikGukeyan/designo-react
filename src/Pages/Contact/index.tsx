import React from 'react';
import styles from './Contact.module.scss';
import { Button, LocationsNav } from '../../components';
import { useForm } from 'react-hook-form';


const Contact: React.FC = () => {

    const { register, formState: { errors }, reset } = useForm({
        mode: 'onBlur'
    })


    return (
            <div className={styles.contact}>
                <div className={styles.board}>
                    <div className={styles.text}>
                        <h1>Contact Us</h1>
                        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                    </div>
                    <div className={styles.form_box}>
                        <form>
                            <div>
                                <input placeholder='Name:' {...register('name', {
                                    required: 'Can’t be empty',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Name must contain at least three letters !'
                                    }
                                })} />
                                {errors?.name && <div className={styles.error}>
                                    <span>{errors?.name?.message?.toString() || 'Wrong format!'}</span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="" />
                                </div>}

                            </div>
                            <div>
                                <input placeholder='Email Address:' {...register('emailAddress', {
                                    required: 'Can’t be empty',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                        message: 'Wrong E-mail format !'
                                    }
                                })} type='email' />
                                {errors?.emailAddress && <div className={styles.error}>
                                    <span>{errors?.emailAddress?.message?.toString() || 'Wrong format!'}</span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="" />
                                </div>}
                            </div>
                            <div>
                                <input placeholder='Phone:' {...register('phoneNumber', {
                                    required: 'Can’t be empty',
                                    pattern: {
                                        value: /^(\+?\d{1,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{2}[-\.\s]?\d{2}$/,
                                        message: 'Wrong Number format!'
                                    }
                                })} type='tel' />
                                {errors?.phoneNumber && <div className={styles.error}>
                                    <span>{errors?.phoneNumber?.message?.toString() || 'Wrong format!'}</span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="" />
                                </div>}
                            </div>
                            <div>
                                <textarea {...register('message', {
                                    required: 'Can’t be empty'
                                })} placeholder='Your Message:' ></textarea>
                                {errors?.message && <div className={styles.error}>
                                    <span>{errors?.message?.message?.toString() || 'Wrong format!'}</span>
                                    <img src="./assets/contact/desktop/icon-error.svg" alt="" />
                                </div>}
                            </div>
                        </form>
                        <div className={styles.button_box}><Button text='submit' /></div>
                        
                    </div>
                </div>
                <LocationsNav />
            </div>
    )
}

export default Contact;