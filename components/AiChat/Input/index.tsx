import React, {useState} from "react";

import CloseIcon from "icons/CloseIcon";
import ArrowIcon from "icons/ArrowIcon";

import styles from "./index.module.css";

interface IProps {
    onSend: (value:string) => void;
}

const ChatInput = ({onSend}:IProps) => {
    const [value, onChange] = useState('');
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    const onClear = ()=>{
        onChange('');
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        onChange('');
        onSend(value)
    }

    return <div className={styles.wrapper}>
        <form onSubmit={onSubmit}>
            <input
                   className={styles.input}
                   placeholder="Введите сообщение"
                   value={value}
                   onChange={onChangeHandler}
            />
        </form>
         <div onClick={()=>!!value.length && onClear()} className={`${styles.clear} ${!!value.length && styles.visible}`}>
             <CloseIcon/>
         </div>
        <div onClick={()=>onSend(value)} className={`${styles.send} ${!!value.length && styles.visible}`}>
            <ArrowIcon/>
        </div>
    </div>
}

export default ChatInput

