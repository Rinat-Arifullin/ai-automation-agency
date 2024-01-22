import React from 'react';
import { IServiceCard } from '../types';

import styles from './index.module.css';

const ServiceCard = ({ title, index, description, theme }: IServiceCard) => {
    return (
        <div className={`${styles.wrapper} ${styles[theme]}`}>
            <div className={styles.index}>{index}</div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;