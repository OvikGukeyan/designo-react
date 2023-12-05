import React from 'react';
import styles from './Locations.module.scss';
import SimpleMap from './map';

const Locations: React.FC = () => {
    return (
            <div className={styles.locations}>
                <div className={styles.location_item}>
                    <div className={styles.location_info}>
                        <h2>Canada</h2>
                        <div className={styles.contacts}>
                            <div>
                                <h5>Designo Central Office</h5>
                                <p>3886 Wellington Street <br />
                                    Toronto, Ontario M9C 3J5 </p>
                            </div>
                            <div>
                                <h5>Contact</h5>
                                <p>P : +1 253-863-8967 <br />
                                    M : contact@designo.co</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <SimpleMap center={{ lat: 43.718371, lng: -79.5428677 }} />
                    </div>
                </div>
                <div className={`${styles.location_item} ${styles.reverse}`}>
                    <div className={styles.location_info}>
                        <h2>Australia</h2>
                        <div className={styles.contacts}>
                            <div>
                                <h5>Designo AU Office</h5>
                                <p>19 Balonne Street <br />
                                    New South Wales 2443</p>
                            </div>
                            <div>
                                <h5>Contact</h5>
                                <p>P : (02) 6720 9092 <br />
                                    M : contact@designo.au</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <SimpleMap center={{ lat: -33.8851098 , lng: 151.2140435, }} />
                    </div>
                </div>
                <div className={styles.location_item}>
                    <div className={styles.location_info}>
                        <h2>United Kingdom</h2>
                        <div className={styles.contacts}>
                            <div>
                                <h5>Designo UK Office</h5>
                                <p>13  Colorado Way <br />
                                    Rhyd-y-fro SA8 9GA</p>
                            </div>
                            <div>
                                <h5>Contact</h5>
                                <p>P : 078 3115 1400 <br />
                                    M : contact@designo.uk</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <SimpleMap center={{ lat: 51.5286416, lng: -0.1015987 }} />
                    </div>
                </div>
            </div>
    )
}

export default Locations;