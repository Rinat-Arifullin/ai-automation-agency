import React from 'react';

import Frame from "components/common/Frame";
import AiChat from "components/AiChat";

import styles from './index.module.css'

import LinkArrow from "icons/linkArrow";
import Input from "../../common/Input";
import {EInputType} from "../../common/Input/types";

const ContactForm = () => {
    return <div id="contacts" className={styles.wrapper}>
        <Frame className={styles.frame}>
            <h1 className={styles.title}>Заявка на разработку</h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Обратный звонок</h2>
                    <Input type={EInputType.TEXT} label='Имя:' placeholder="Иван"/>
                    <Input type={EInputType.PHONE} label='Телефон:' placeholder="+7 (999) 999 99 99"/>
                    <Input type={EInputType.AREA} className={styles.area} label='Опишите Ваш бизнес или запрос:'/>
                    <div className={styles.submit}>Оставить заявку <LinkArrow color='yellow'/></div>
                </div>
                <div>
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