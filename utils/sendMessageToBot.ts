import { IContactForm } from 'components/Main/ContactForm'

export const sendMessageToBot = async (form: IContactForm) => {
    const BOT_RECIVER_TOKEN = process.env.BOT_RECIVER_TOKEN
    const BOT_CHAT_ID = process.env.BOT_CHAT_ID

    if (!BOT_RECIVER_TOKEN || !BOT_CHAT_ID) {
        console.error(
            'Bot Receiver Token and/or Chat ID are not defined in the environment variables.'
        )
    }

    const baseURL = `https://api.telegram.org/bot${BOT_RECIVER_TOKEN}/sendMessage?chat_id=${BOT_CHAT_ID}&text=`

    let messageText = ''
    messageText += `Name: ${form.name}\n`
    messageText += `Phone: ${form.phone}\n`
    messageText += `Telegram or Email: ${form.telegramOrEmail}\n`
    messageText += `Description: ${form.description}\n`

    if (Object.values(form).every((el) => !el)) {
        return
    }

    return await fetch(baseURL + messageText)
}
