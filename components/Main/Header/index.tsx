import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import MobileHeader from './MobileHeader'

import styles from './index.module.css'

import { navItems } from './constants'
import { useMobileBreakpoint } from 'hooks/useMedia'

const Header = () => {
    const [withBorder, setWithBorder] = useState(false)
    const isMobile = useMobileBreakpoint()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!window.scrollY) {
                setWithBorder(false)
            }
            if (!withBorder && window.scrollY) {
                setWithBorder(true)
            }
        })
    }, [])

    if (isMobile) {
        return <MobileHeader />
    }

    return (
        <header
            className={`${styles.header} ${withBorder ? styles.border : ''}`}
        >
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <Link href={item.url}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
