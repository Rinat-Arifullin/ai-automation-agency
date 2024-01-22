import React from 'react'

import Frame from 'components/common/Frame'

import styles from './index.module.css'

import LinkArrow from 'icons/linkArrow'

import Input from 'components/common/Input'
import TextArea from 'components/common/TextArea'

export const Form = () => {
    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.call}>Обратный звонок</h2>
            <div className={styles.inputs}>
                <Input placeholder="Иван" label="Имя:" />
                <Input placeholder="+7 (999) 999 99 99" label="Телефон:" />
                <Input placeholder="@IvanIvanov" label="Telegram или почта:" />
            </div>
            <h2 className={styles.title}>
                Задайте вопрос о наших услугах или{' '}
                <span>закажите разрабтку</span>
            </h2>
            <div className={styles.textArea}>
                <TextArea label="Опишите ваш бизнес или запрос: "/>
            </div>
            <div className={styles.submit}>
                Оставить заявку <LinkArrow color="yellow" />
            </div>
        </div>
    )
}

const ContactForm = () => {
    return (
        <div id="contacts" className={styles.wrapper}>
            <Frame className={styles.frame}>
                <h1 className={styles.title}>Заявка на разработку</h1>
                <div className={styles.content}>
                    <Form />
                </div>
            </Frame>
        </div>
    )
}

export default ContactForm
