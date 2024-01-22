import { useCallback, useState } from 'react'
import OpenAI from 'openai'

import { ERole, IMessage } from 'components/AiChat/types'
import { initMessages } from './settings'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
})

const useAiChat = () => {
    const [messages, setMessages] = useState<IMessage[]>(initMessages)
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = useCallback(
        async (content: string, role = ERole.USER) => {
            const newMessages = [
                ...messages,
                {
                    role,
                    content,
                },
            ]

            setMessages(newMessages)
            setIsLoading(true)

            try {
                const response = await openai.chat.completions.create({
                    model: 'gpt-3.5-turbo',
                    messages: newMessages,
                })
                const aiMessage = response.choices[0].message as IMessage
                setMessages([...newMessages, aiMessage])
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        },
        [messages]
    )

    return {
        messages,
        isLoading,
        sendMessage,
    }
}

export default useAiChat
