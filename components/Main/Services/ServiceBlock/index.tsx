import React from 'react'
import { IServiceBlockProps } from '../types'
import ServiceCard from '../ServiceCard'

import styles from './index.module.css'
import Toggle from 'components/common/Toggle'

const ServiceBlock = ({ title, cardList, isOdd }: IServiceBlockProps) => {
    return (
        <Toggle title={title}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    {cardList.map((card, index) => (
                        <ServiceCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            theme={isOdd ? 'black' : 'white'}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
        </Toggle>
    )
}

export default ServiceBlock
