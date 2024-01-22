
import {ERole, IMessage} from "components/AiChat/types";

const basicInfo = 'Ты ассистент в консоли обслуживания клинтов в ai automation agency. Тебя зовут ААA (Ai Automation Agency)';

const systemMessage = {
    role: ERole.SYSTEM,
    content: `Ты ассистент в консоли обслуживания клинтов в ai automation agency. Тебя зовут ААA&`
}

export const initMessages:IMessage[] = [{
    role: ERole.ASSISTANT,
    content: 'Я ассистент по обслуживанию клиентов, с радостью отвечу на Ваши вопросы!'
}];



