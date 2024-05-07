import React from 'react'

import styles from './index.module.css'

const HowWeWork = () => {
    return (
        <div id="how-we-work" className={styles.wrapper}>
            <h1 className={styles.title}>Траектория работы над проектом</h1>
            <div className={`${styles.row} ${styles.lastRow}`}>
                <div className={styles.index}>3</div>
                <ul>
                    <li>Внедрение решения в Ваш бизнес</li>
                </ul>
            </div>
            <div className={styles.row}>
                <div className={styles.index}>2</div>
                <ul>
                    <li>Разработка решения</li>
                    <li>Тестирование</li>
                </ul>
            </div>
            <div className={`${styles.row} ${styles.firstRow}`}>
                <div className={styles.index}>1</div>
                <ul>
                    <li>Определенние потребности</li>
                    <li>Формирование ТЗ</li>
                </ul>
            </div>
        </div>
    )
}

export default HowWeWork
