import { InputHTMLAttributes } from 'react';

export enum EInputType {
    TEXT = 'text',
    PHONE = 'tel',
    AREA = 'textarea'
}

export type TInputProps = {
    label: string;
    type?: EInputType;
    onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>