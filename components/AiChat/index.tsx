import React, {useState} from 'react';
import Frame, {EFrameTheme} from "components/common/Frame";

import styles from './index.module.css'

import {IMessage} from "./types";
import ChatInput from "./Input";

const startMessage:IMessage = {
    text: 'Я ассистент по обслуживанию клиентов, с радостью отвечу на ваши вопросы! ',
    isUser: false
}

const AiChat = () => {
    const [isTyping] = useState(false)
    const [messages] = useState<IMessage[]>([startMessage])
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value)
    }

    const onSendMessage = () => {
        setValue('')
        messages.push({
            text: value,
            isUser: true
        })
    }

    return <Frame theme={EFrameTheme.LIGHT}>
        <div className={styles.chat}>
            {messages.map(({isUser, text}) => {
                return <div key={text} className={styles.message}>
                    <span className={`${styles.from} ${isUser ? styles.isUser: ''}`}>{isUser ? 'Вы' : 'ААA'}</span>
                    <p className={`${styles.text} ${isUser ? styles.isUser: ''}`}>{text}</p>
                </div>
            })}
            {isTyping && <p className={styles.isTyping}>AAA печатает...</p>}
        </div>
        <ChatInput value={value} onChange={onChange} onSend={onSendMessage}/>
    </Frame>
}

export default AiChat