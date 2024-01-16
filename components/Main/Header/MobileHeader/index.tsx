import React, {useState} from 'react';

import styles from './index.module.css';
import {navItems} from "../constants";


const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(state=>!state)
    }

    return <div className={styles.header}>
        <div className={`${styles.btn} ${isOpen?styles.isOpen: ''}`} onClick={toggleOpen}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        <nav className={`${styles.menu} ${isOpen ? styles.isOpen: ''}`}>
            <h1 className={styles.title}>
                Ai <br/>
                Automation <br/>
                Agency <br/>
            </h1>
            <ul>
                {navItems.map(navItem=>{
                    return <li key={navItem.label}>
                        <a href={navItem.url}>{navItem.label}</a>
                    </li>
                })}
            </ul>
        </nav>
    </div>
}

export default MobileHeader