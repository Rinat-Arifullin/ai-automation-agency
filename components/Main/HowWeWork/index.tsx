import React from 'react';

import styles from './index.module.css';

const HowWeWork = () => {
    return <div id="how-we-work" className={styles.wrapper}>
        <h1 className={styles.title}>Траектория работы над проектом</h1>
        <div className={`${styles.row} ${styles.firstRow}`}>
            <div className={styles.index}>
                1
            </div>
            <ul>
                <li>Исследование</li>
                <li>Анализ</li>
            </ul>
        </div>
        <div className={styles.row}>
            <div className={styles.index}>
                2
            </div>
            <ul>
                <li>Выделение направлений автоматизации</li>
                <li>Сбор команды под проект </li>
            </ul>
        </div>
        <div className={styles.row}>
            <div className={styles.index}>
                3
            </div>
            <ul>
                <li>Разработка решения</li>
                <li>Тестирование</li>
                <li>Внедрение решения в Ваш бизнес</li>
            </ul>
        </div>
    </div>
}

export default HowWeWork;