import React, {useEffect, useState} from "react";
import Link from "next/link";

import styles from './index.module.css';

import {navItems} from "./constants";


const Header = () => {
    const [withBorder, setWithBorder] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(!window.scrollY){
                setWithBorder(false);
            }
            if(!withBorder && window.scrollY){
                setWithBorder(true);
            }
        })
    },[])

    return <header className={`${styles.header} ${withBorder? styles.border: ''}`}>
        <nav>
            <ul>
                {navItems.map(item => (<li key={item.label}>
                    <Link href={item.url} smooth="true" scroll={true}>{item.label}</Link>
                </li>))}
            </ul>
        </nav>
    </header>
}

export default Header;