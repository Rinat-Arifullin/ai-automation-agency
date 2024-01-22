export enum ERole {
    USER = 'user',
    ASSISTANT = 'assistant',
    SYSTEM = 'system'
}

export interface IMessage {
    role: ERole;
    content: string;
}