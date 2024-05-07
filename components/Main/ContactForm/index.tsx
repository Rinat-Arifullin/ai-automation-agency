import React, { useState } from 'react'

import Frame from 'components/common/Frame'

import styles from './index.module.css'

import Input from 'components/common/Input'
import TextArea from 'components/common/TextArea'
import { sendMessageToBot } from 'utils/sendMessageToBot'
import SubmitBtn from 'components/common/SubmitBtn'

export interface IContactForm {
    name: string
    phone: string
    telegramOrEmail: string
    description: string
}

const initalForm: IContactForm = {
    name: '',
    phone: '',
    telegramOrEmail: '',
    description: '',
}

let timer: NodeJS.Timeout | null = null

export const Form = () => {
    const [form, setForm] = useState<IContactForm>(initalForm)
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<
        'success' | 'error' | null
    >(null)

    const onChangeFormField = (field: keyof IContactForm, newValue: string) => {
        setForm((state) => ({
            ...state,
            [field]: newValue,
        }))
    }

    const onSubmit = () => {
        setIsLoading(true)
        if (timer) {
            timer = null
        }
        sendMessageToBot(form)
            .then(() => {
                setSubmitStatus('success')
            })
            .catch(() => {
                setSubmitStatus('error')
            })
            .finally(() => {
                timer = setTimeout(() => {
                    setSubmitStatus(null)
                }, 3000)
                setIsLoading(false)
            })
    }

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.call}>Обсудить проект</h2>
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
                    onChange={(value) => onChangeFormField('phone', value)}
                />
                <Input
                    placeholder="@IvanIvanov"
                    label="Telegram или почта:"
                    name="telegramOrEmail"
                    value={form.telegramOrEmail}
                    onChange={(value) =>
                        onChangeFormField('telegramOrEmail', value)
                    }
                />
            </div>
            <h2 className={styles.title}>
                Задайте вопрос о наших услугах, <span>закажите разрабтку</span>{' '}
                или присоединяйтес в нашу команду
            </h2>
            <div className={styles.textArea}>
                <TextArea
                    label="Опишите ваш бизнес или запрос: "
                    name="description"
                    value={form.description}
                    onChange={(value) =>
                        onChangeFormField('description', value)
                    }
                />
            </div>
            <SubmitBtn
                className={styles.submit}
                onClick={onSubmit}
                submitStatus={submitStatus}
                isLoading={isLoading}
            />
        </div>
    )
}



const ContactForm = ({theme = 'yellow'}:{theme?: 'yellow'|'green'}) => {
    return (
        <div id="contacts" className={`${styles.wrapper} ${styles[theme]}`}>
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
