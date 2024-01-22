import React, { useState } from 'react'

import Frame from 'components/common/Frame'

import styles from './index.module.css'

import LinkArrow from 'icons/linkArrow'

import Input from 'components/common/Input'
import TextArea from 'components/common/TextArea'
import { sendMessageToBot } from 'utils/sendMessageToBot'

export interface IContactForm {
    name: string
    phone: string
    telegramOrEmail: string
    description: string;
}

const initalForm: IContactForm = {
    name: '',
    phone: '',
    telegramOrEmail: '',
    description: '',
}

export const Form = () => {
    const [form, setForm] = useState<IContactForm>(initalForm);

    const onChangeFormField = (field: keyof IContactForm, newValue:string)=>{
        setForm(state=>({
            ...state,
            [field]: newValue
        }))
    }

    const onSubmit = async ()=>{
        const response = await sendMessageToBot(form)
        console.log({response})
    }

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.call}>Обратный звонок</h2>
            <div className={styles.inputs}>
                <Input
                    placeholder="Иван"
                    label="Имя:"
                    name="name"
                    value={form.name}
                    onChange={(value) => onChangeFormField('name', value)}
                />
                <Input
                    placeholder="+7 (999) 999 99 99"
                    label="Телефон:"
                    name="phone"
                    value={form.phone}
                    onChange={(value)=>onChangeFormField('phone', value)}
                />
                <Input
                    placeholder="@IvanIvanov"
                    label="Telegram или почта:"
                    name="telegramOrEmail"
                    value={form.telegramOrEmail}
                    onChange={(value)=>onChangeFormField('telegramOrEmail', value)}
                />
            </div>
            <h2 className={styles.title}>
                Задайте вопрос о наших услугах или{' '}
                <span>закажите разрабтку</span>
            </h2>
            <div className={styles.textArea}>
                <TextArea
                    label="Опишите ваш бизнес или запрос: "
                    name="description"
                    value={form.description}
                    onChange={(value)=>onChangeFormField('description', value)}
                />
            </div>
            <div className={styles.submit} onClick={onSubmit}>
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
