import { config } from 'dotenv'
config()

import { OpenAI } from 'langchain/llms/openai'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'

import services from './services.json'

const llm = new OpenAI({
    temperature: 0,
})

const servicesTemplate =
    "You are an AI assistant in an AI automation agency. Your job is to answer the user's question {question} using services in JSON format: {services}. Please provide the answer in a user-friendly format, format the text for the chat"
const servicesPromptTemplate = new PromptTemplate({
    template: servicesTemplate,
    inputVariables: ['question'],
    partialVariables: {
        services: JSON.stringify(services),
    },
})

export const servicesChain = new LLMChain({
    llm,
    prompt: servicesPromptTemplate,
    outputKey: 'services',
})
