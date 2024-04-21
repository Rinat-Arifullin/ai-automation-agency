import React from 'react'

import Frame from 'components/common/Frame'

import styles from './index.module.css'

const About = () => {
    return (
        <div id="about" className={styles.wrapper}>
            <h1 className={styles.title}>Команда специалистов</h1>
            <p className={styles.subTitle}>
                Мы — команда профессионалов, страстно увлеченных разработкой и
                инновациями в IT.
            </p>
            <div className={styles.content}>
                <div>
                    <div className={styles.card}>
                        <h2>Эксперты в Области AI</h2>
                        <Frame withOutline>
                            <p>
                                Наша команда состоит из выдающихся специалистов
                                по искусственному интеллекту, готовых решать
                                самые сложные задачи вашего бизнеса. Инженеры по
                                автоматизации занимаются созданием
                                интегрированных систем, способных оптимизировать
                                бизнес-процессы и улучшать операционную
                                эффективность. Они внедряют решения, которые
                                делают ваш бизнес более гибким и реактивным.
                            </p>
                        </Frame>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <h2>Mobile-разработчики</h2>
                        <Frame withOutline>
                            <p>
                                Команда mobile разработки реализовыйвают проекты
                                под android и ios.
                            </p>
                        </Frame>
                    </div>
                    <div className={styles.card}>
                        <h2>Web-разработчики</h2>
                        <Frame withOutline>
                            <p>
                                Наша команда разработчиков обладает обширным
                                опытом в front-end и back-end разработке, а
                                также в создании веб-сайтов под ключ.
                            </p>
                        </Frame>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
