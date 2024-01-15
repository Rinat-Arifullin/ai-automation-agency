import React from 'react';

import styles from './index.module.css';

const Services = () => {
    return <div id="services" className={styles.services}>
        <h1 className={styles.title}>Другие услуги</h1>
        <div className={styles.content}>
            <ul>
                <li>AI-автоматизация ключевых бизнес-процессов компании</li>
                <li>Полный цикл AI-автоматизации работы на маркетплейсах</li>
                <li>Автоматизация работы над визуальными материалами компании</li>
                <li>Создание автоворонок на основе ChatGPT</li>
            </ul>
            <ul>
                <li>Создание чат-ботов в мессенджерах, социальных сетях и на сайтах на основе ChatGPT</li>
                <li>Онбординг новых сотрудников с помощью чат-ботов. Первичное собеседование персонала</li>
                <li>Создание AI-консультантов</li>
                <li>HR процессы</li>
            </ul>
        </div>

    </div>
}

export default Services;