import { PromptTemplate } from 'langchain/prompts'
import { categories, categoriesDescription } from './categories'
import { LLMChain } from 'langchain/chains'
import { OpenAI } from 'langchain/llms/openai'

const llm = new OpenAI({
    openAIApiKey: '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',
    temperature: 0,
})

const categoryTemplate = `
    Классифицируй запрос клиента по категориям {categories}.
    Описание категорий и их название - {categoriesDescription}
    Ответ должен содержать только название категории из доступных категорий или слово Unknow.
    Запрос клиента: {question}.
    `
const categoryPromptTemplate = new PromptTemplate({
    template: categoryTemplate,
    partialVariables: {
        categories,
        categoriesDescription,
    },
    inputVariables: ['question'],
})

export const categoryChain = new LLMChain({
    llm,
    prompt: categoryPromptTemplate,
    outputKey: 'category',
})
