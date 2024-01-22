import { IContactForm } from "components/Main/ContactForm";

export const sendMessageToBot = async (form: IContactForm) => {

    const baseURL = `https://api.telegram.org/bot${process.env.BOT_RECIVER_TOKEN}/sendMessage?chat_id=${process.env.BOT_CHAT_ID}&text=`;
    console.log(baseURL)
    let messageText = '';
    messageText += `Name: ${form.name}\n`;
    messageText += `Phone: ${form.phone}\n`;
    messageText += `Telegram or Email: ${form.telegramOrEmail}\n`;
    messageText += `Description: ${form.description}\n`;
    return await fetch(baseURL + messageText);
}