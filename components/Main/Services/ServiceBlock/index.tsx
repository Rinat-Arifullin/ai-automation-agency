import React from 'react';
import { IServiceBlockProps } from '../types';
import ServiceCard from '../ServiceCard';

import styles from './index.module.css';

const ServiceBlock = ({ title, cardList, isOdd }: IServiceBlockProps) => {
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            <div className={styles.content}>
                {cardList.map((card, index) => (
                    <ServiceCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        theme={isOdd ? 'black': 'white'}
                        index={index + 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServiceBlock;