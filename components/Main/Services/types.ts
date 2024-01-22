export interface IServiceCard {
    title: string
    theme: 'white' | 'black';
    index?: number
    description?: string
}
export interface IServiceBlockProps {
    title: string
    cardList: IServiceCard[]
    isOdd?:boolean;
}
