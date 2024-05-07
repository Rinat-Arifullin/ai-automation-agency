import React from 'react'

import Frame from 'components/common/Frame'

import styles from './index.module.css'
import ContactForm from '../ContactForm'

const FirstPage = () => {
    return (
        <Frame>
            <div className={styles.firstPage}>
                <div className={styles.leadMagnet}>
                    <div>
                        <p>IT для бизнеса</p>
                    </div>
                </div>
                <div className={styles.title}>
                    <h1>Web Development Agency</h1>
                </div>
                <div className={styles.footer}>
                    <p>
                        Мы - агентство по web-разработке, специализирующееся на
                        разработке сайтов под ключ, front-end и back-end
                        разработке, создании мобильных приложений и внедрении AI
                        для современных и инновационных проектов.
                    </p>
                </div>
                <ContactForm />
            </div>
        </Frame>
    )
}

export default FirstPage
