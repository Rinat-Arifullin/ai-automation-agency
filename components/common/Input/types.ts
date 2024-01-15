export enum EInputType {
    TEXT = 'text',
    PHONE = 'tel',
    AREA = 'textarea'
}

export type TInputProps = {
    label: string;
    type?: EInputType;
    onChange?: (value: string) => void;
    placeholder?: string
    value?: string
    className?: string;
}