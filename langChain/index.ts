import { LLMChain, SequentialChain } from 'langchain/chains'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'
import { servicesChain } from './servicesChain'

const llm = new OpenAI({
    temperature: 0,
})

const delimeter = '####'

const availableChains = `
    servicesChain: Chain for consulting on ai automation agency services. If the client will be asking about services, requesting development and similar requests, use servicesChain${delimeter}categoryChain: Use this chain for categorizing the client's initial request.
`

const routerTemplate = `
  You will be given the names of available cahins and a description of what this prompt is best suited for. Available chains will be separet with delimeter - ${delimeter}
  You can also review the source data if you believe that reviewing it will ultimately lead to a better response from the language model.
  Available chains: ${availableChains} with delimeter: ${delimeter}.
  User question: {question}.
  The response should be the name of the chain wihtout other letters.
`
const routerPromptTemplate = new PromptTemplate({
    template: routerTemplate,
    inputVariables: ['question'],
})

export const routerChain = new LLMChain({
    llm,
    prompt: routerPromptTemplate,
})

export const chainsMap = {
    servicesChain,
}
