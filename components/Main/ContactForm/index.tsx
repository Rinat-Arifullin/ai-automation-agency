import React from 'react';

import Frame from "components/common/Frame";
import AiChat from "components/AiChat";

import styles from './index.module.css'

import LinkArrow from "icons/linkArrow";


const ContactForm = () => {
    return <div id="contacts" className={styles.wrapper}>
        <Frame className={styles.frame}>
            <h1 className={styles.title}>Заявка на разработку</h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Обратный звонок</h2>
                    <input className={styles.input} placeholder="Имя"/>
                    <input className={styles.input} placeholder="Телефон"/>
                    <textarea className={styles.input} placeholder="Ваш запрос"/>
                    <div className={styles.submit}>Оставить заявку <LinkArrow color='yellow'/></div>
                </div>
                <div className={styles.aiBlock}>
                    <h2 className={styles.aiTitle}>
                        Задайте вопрос о наших услугах <span>AI ассистенту</span> или <span>закажите разрабтку</span>
                    </h2>
                    <AiChat/>
                </div>
            </div>
        </Frame>
    </div>
}

export default ContactForm;