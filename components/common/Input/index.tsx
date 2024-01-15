import React from 'react';
import {EInputType, TInputProps} from "./types";

import styles from './index.module.css';
import PhoneInput from "./PhoneInput";

const Input = ({type, label, ...rest}:TInputProps) => {

    if(type === EInputType.PHONE) {
        return <div className={`${styles.wrapper}`}>
            <label>{label}</label>
            <PhoneInput  className={`${styles.input} ${rest.className}`} label={label} {...rest}/>
        </div>
    }

    return <div className={`${styles.wrapper} ${type === EInputType.AREA && styles.textarea}`}>
        <label>{label}</label>
        {type === EInputType.AREA ?
            <textarea className={`${styles.input} ${rest.className} `} {...rest}/> :
            <input className={`${styles.input} ${rest.className}`} type={type} {...rest}/>
        }
    </div>
}

export default Input;