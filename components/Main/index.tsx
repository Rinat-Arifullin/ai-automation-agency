import React from 'react'

import Header from 'components/Main/Header'
import FirstPage from 'components/Main/FirstPage'
import About from 'components/Main/About'
import Services from 'components/Main/Services'
import HowWeWork from 'components/Main/HowWeWork'
import ContactForm from 'components/Main/ContactForm'

import Frame from 'components/common/Frame'

import { Montserrat } from 'next/font/google'

import styles from './index.module.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    style: ['normal'],
})

const MainPage = () => {
    return (
        <main className={`${montserrat.className} ${styles.wrapper}`}>
            <div className={styles.content}>
                <Header />
                <Frame>
                    <FirstPage />
                </Frame>
                <div id="about">
                    <About />
                </div>
                {/* <Cases/> */}
                <Services />
                <HowWeWork />
                <ContactForm />
            </div>
        </main>
    )
}

export default MainPage
