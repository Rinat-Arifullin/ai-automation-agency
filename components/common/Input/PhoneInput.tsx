import React from 'react';

import {formatPhoneNumber} from "utils/phone";
import {TInputProps} from "./types";

const PhoneInput = ({onChange, value, ...rest}:TInputProps) => {

    const handleChange = (e) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        if(onChange){
        onChange(formattedValue);
        }
    };

    return (
        <input
            {...rest}
            type="tel"
            value={value}
            onChange={handleChange}
            placeholder="+7 (___) ___ __ __"
        />
    );
}

export default  PhoneInput;