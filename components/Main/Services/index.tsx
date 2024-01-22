import React from 'react'

import Frame from 'components/common/Frame'
import { services } from './constats'
import ServiceBlock from './ServiceBlock'

import styles from './index.module.css';

const Services = () => {
    return (
        <Frame>
            <h1 className={styles.title}>Услуги</h1>
            <div className={styles.serviceBlockWrapper}>
                {services.map((serviceBlock, index) => {
                    return (
                        <ServiceBlock
                            key={serviceBlock.title}
                            title={serviceBlock.title}
                            cardList={serviceBlock.cardList}
                            isOdd={index % 2 === 0}
                        />
                    )
                })}
            </div>
        </Frame>
    )
}

export default Services
