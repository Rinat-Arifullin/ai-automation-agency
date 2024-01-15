import React from 'react';

import Frame from "components/common/Frame";

import styles from './index.module.css'

const About = () => {
    return <div id="about" className={styles.wrapper}>
        <h1 className={styles.title}>Команда специалистов</h1>
        <p className={styles.subTitle}>Мы — команда профессионалов, страстно увлеченных инновационными технологиями и искусственным интеллектом. </p>
        <div className={styles.content}>
            <div>
                <div className={styles.card}>
                    <h2>Эксперты в Области AI</h2>
                    <Frame withOutline>
                        <p>
                            Наша команда состоит из выдающихся специалистов по искусственному интеллекту,
                            готовых решать самые сложные задачи вашего бизнеса.
                        </p>
                    </Frame>
                </div>
                <div className={styles.card}>
                    <h2>Инженеры по автоматизации </h2>
                    <Frame withOutline>
                        <p>
                            Наши инженеры по автоматизации занимаются созданием интегрированных систем,
                            способных оптимизировать бизнес-процессы и улучшать операционную эффективность.
                            Они внедряют решения, которые делают ваш бизнес более гибким и реактивным.
                        </p>
                    </Frame>
                </div>
            </div>
            <div>
                <div className={styles.card}>
                    <h2>Команда исследований</h2>
                    <Frame withOutline>
                        <p>
                            Наша команда R&D занимается поиском новаторских подходов и созданием технологических решений,
                            которые приводят к постоянному развитию наших услуг и повышению их эффективности.
                        </p>
                    </Frame>
                </div>
                <div className={styles.card}>
                    <h2>Специалисты по анализу данных</h2>
                    <Frame withOutline>
                        <p>
                            Наши аналитики данных работают с большими объемами информации, используя AI для выявления
                            ценных паттернов и предоставления вам инсайтов, необходимых для принятия информированных решений.
                        </p>
                    </Frame>
                </div>
            </div>

        </div>
    </div>
}

export default About;