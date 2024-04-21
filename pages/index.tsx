import React from 'react'
import Head from 'next/head'

import MainPage from 'components/Main'

export default function Home() {
    return (
        <>
            <Head>
                <title>Ai Automation Agency</title>
                <meta
                    name="viewport"
                    content="width=device-width; initial-scale=1; maximum-scale=1.0, user-scalable=no"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainPage />
        </>
    )
}
