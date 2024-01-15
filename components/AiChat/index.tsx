import React, {useState} from 'react';
import Frame, {EFrameTheme} from "components/common/Frame";
import {IMessage} from "./types";

const startMessage:IMessage = {
    text: 'Я ассистент по обслуживанию клиентов, с радостью отвечу на ваши вопросы! ',
    isUser: false
}

const AiChat = () => {
    const [messages, setMessages] = useState<IMessage[]>([startMessage])

    return <Frame theme={EFrameTheme.LIGHT}>
        <div>
            {messages.map((message) => {
                return <div key={message.text}>
                    <span>{message.isUser ? 'Вы' : 'ААA'}</span>
                    <p>{message.text}</p>
                </div>
            })}
        </div>
        <input/>
    </Frame>
}

export default AiChat