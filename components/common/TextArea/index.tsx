import React from 'react';

import styles from './index.module.css';

interface ITextAreaProps {
    label?: string
    placeholder?: string
    className?: string
    value?: string
    name?:string;
    onChange?: (value: string) => void
}

const TextArea = ({label, placeholder,className, value, name, onChange}: ITextAreaProps) => {

    const onChangeHandler = (e) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                placeholder={placeholder}
                className={`${styles.textArea} ${className}`}
                value={value}
                name={name}
                onChange={onChangeHandler}
            />
        </div>
    )
}

export default TextArea;