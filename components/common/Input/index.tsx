import React from 'react'

import styles from './index.module.css'

interface IInputProps {
    label?: string
    placeholder?: string
    className?: string
    name?: string
    value?: string
    invalid?: boolean
    onChange?: (value: string) => void
}

const Input = ({
    label,
    placeholder,
    className,
    value,
    onChange,
    name,
    invalid,
}: IInputProps) => {
    const onChnageHandler = (e) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                name={name}
                placeholder={placeholder}
                className={`${styles.input} ${invalid && styles.invalid} ${className}`}
                value={value}
                onChange={onChnageHandler}
            />
        </div>
    )
}

export default Input
