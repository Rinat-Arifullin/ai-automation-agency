import React from 'react';

import AiChat from "components/AiChat";

import styles from './index.module.css';

const FirstPage = () => {
    return <div className={styles.firstPage}>
        <div className={styles.leadMagnet}>
            <div>
                <p>Автоматизация бизнесса</p>
            </div>
        </div>
        <div className={styles.aiTitle}>
            <h2>
                Задайте вопрос о наших услугах <span>AI ассистенту</span> или <span>закажите разрабтку</span>
            </h2>
        </div>
        <div className={styles.title}>
            <h1>
                AI <br/>
                Automation <br/>
                Agency <br/>
            </h1>
        </div>
        <div className={styles.aiBlock}>
        <AiChat/>
        </div>
        <div className={styles.footer}>
            <p>
                Наши уникальные решения в области автоматизации с использованием AI меняют правила игры в мире бизнеса,
                помогая компаниям повышать эффективность, сокращать издержки и преодолевать границы своего роста.
            </p>
        </div>
    </div>
}

export default FirstPage;