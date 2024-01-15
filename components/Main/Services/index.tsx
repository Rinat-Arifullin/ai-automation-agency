import React from 'react';

import styles from './index.module.css';
import LinkArrow from "../../../icons/linkArrow";
import Link from "next/link";

const services: string[] = [
    'AI-автоматизация ключевых бизнес-процессов компании',
    'Полный цикл AI-автоматизации работы на маркетплейсах',
    'Автоматизация работы над визуальными материалами компании',
    'Создание автоворонок на основе ChatGPT',
    'Создание чат-ботов в мессенджерах, социальных сетях и на сайтах на основе ChatGPT',
    'Онбординг новых сотрудников с помощью чат-ботов. Первичное собеседование персонала',
    'Создание AI-консультантов',
    'HR процессы'
]

const Services = () => {
    return <div id="services" className={styles.services}>
        <h1 className={styles.title}>Другие услуги</h1>
        <div className={styles.content}>
            {services.map((service, index) => {
                return (<div key={service} className={styles.row}>
                    <div className={styles.index}>{index + 1}</div>
                    <div className={styles.text}>{service}</div>
                </div>)
            })}
        </div>
        <div className={styles.submit}>
            <Link href='#contacts'>
                Оставить заявку <LinkArrow color='yellow'/>
            </Link>
        </div>
    </div>
}

export default Services;