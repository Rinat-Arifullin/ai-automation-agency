import React from 'react';

import Frame from "components/common/Frame";

import Case from "./Case";

import styles from './index.module.css';

const cases = [
    {
        title: 'Создание AI-консультантов',
        url: '',
    },
    {
        title: 'Обучение с помощью AI',
        url: '',
    },
    {
        title: 'Автоворонки на основе AI',
        url: '',
    },
    {
        title: 'AI-Powered Automation',
        url: '',
    },
    {
        title: 'Data Analytics',
        url: '',
    },
    {
        title: 'Custom AI Solutions',
        url: '',
    },

]

const Cases = () => {
    return <Frame className={styles.cases} id="cases">
        <h1 className={styles.title}>Кейсы</h1>
        <div className={styles.list}>
            {cases.map((item, index)=>
                <Case key={item.title} index={index + 1} title={item.title} url={item.url}/>
            )}
        </div>
    </Frame>
}

export default Cases