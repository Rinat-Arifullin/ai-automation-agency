import { IContactForm } from 'components/Main/ContactForm'
import axios from 'axios'

const options = (form: IContactForm) => ({
    method: 'POST',
    url: `https://api.telegram.org/bot${process.env.BOT_RECIVER_TOKEN}/sendMessage`,
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
    },
    data: {
        text: `Name: ${form.name}\nPhone: ${form.phone}\nTelegram or Email: ${form.telegramOrEmail}\nDescription: ${form.description}`,
        parse_mode: 'HTML',
        chat_id: process.env.BOT_CHAT_ID,
    },
})

export const sendMessageToBot = async (form: IContactForm) => {
    if (Object.values(form).every((el) => !el)) {
        return
    }

    return await axios.request(options(form))
}
