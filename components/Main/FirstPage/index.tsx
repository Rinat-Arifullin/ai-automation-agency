import React from 'react'

import styles from './index.module.css'
import ContactForm from '../ContactForm'

const FirstPage = () => {
    return (
        <div className={styles.firstPage}>
            <div className={styles.leadMagnet}>
                <div>
                    <p>Автоматизация бизнесса</p>
                </div>
            </div>
            <div className={styles.title}>
                <h1>AI Automation Agency</h1>
            </div>
            <div className={styles.footer}>
                <p>
                    Наши уникальные решения в области автоматизации с
                    использованием AI меняют правила игры в мире бизнеса,
                    помогая компаниям повышать эффективность, сокращать издержки
                    и преодолевать границы своего роста.
                </p>
            </div>
            <ContactForm/>
        </div>
    )
}

export default FirstPage
