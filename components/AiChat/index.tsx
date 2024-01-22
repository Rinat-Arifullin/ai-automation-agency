import React from 'react'
import Frame, { EFrameTheme } from 'components/common/Frame'
import useAiChat from 'AiChat'

import ChatInput from './Input'
import { ERole } from './types'
import styles from './index.module.css'

const AiChat = () => {
    const { messages, isLoading } = useAiChat()

    // const onSendMessage = async (value: string) => {
    //     sendMessage(value)
    //     try {
    //         const category = await routerChain.call({ question: value })
    //         const answer = await chainsMap[
    //             category.text.replace('\n', '')
    //         ].call({ question: value })

    //         console.log(answer.services)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    console.log({ messages })

    return (
        <Frame theme={EFrameTheme.LIGHT}>
            <div className={styles.chat}>
                {messages.map(({ role, content }) => {
                    const isUser = role === ERole.USER
                    return (
                        <div key={content} className={styles.message}>
                            <span
                                className={`${styles.from} ${isUser ? styles.isUser : ''}`}
                            >
                                {isUser ? 'Вы' : 'ААA'}
                            </span>
                            <p
                                className={`${styles.text} ${isUser ? styles.isUser : ''}`}
                            >
                                {content}
                            </p>
                        </div>
                    )
                })}
                {isLoading && (
                    <p className={styles.isTyping}>AAA печатает...</p>
                )}
            </div>
            {/* <ChatInput onSend={onSendMessage} /> */}
        </Frame>
    )
}

export default AiChat
