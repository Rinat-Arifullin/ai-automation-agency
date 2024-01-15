import React from 'react';

import LinkArrow from "icons/linkArrow";

import styles from './index.module.css'

interface IProps {
    index: number;
    title: string;
    url: string;
}

const Case = ({index, title, url}:IProps) => {
    return <div className={styles.case}>
        <div className={styles.header}>
            <div className={styles.index}>{index}</div>
            <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.link}>
            <a>Подробнее</a>
            <LinkArrow color={'black'}/>
        </div>
    </div>
}

export default Case;