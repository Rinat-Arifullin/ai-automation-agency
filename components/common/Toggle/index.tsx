import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './index.module.css' // Assume a CSS module with relevant styles
import ArrowIcon from 'icons/ArrowIcon'

interface IProps {
    children: ReactNode
    title
}

const Toggle = ({ children, title }: IProps) => {
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [contentHeight, setContentHeight] = useState<number | null>(null)
    const [isCollapsed, setIsCollapsed] = useState(true)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const measureContentHeight = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }

    useEffect(() => {
        measureContentHeight()
    }, [isCollapsed])

    return (
        <div
            className={`${styles.collapseContainer} ${!isCollapsed && styles.isCollapsed}`}
        >
            <div
                className={`${styles.collapseLabel} ${isCollapsed && styles.collapseLabelOpen}`}
                onClick={toggleCollapse}
            >
                {title}
                <div
                    className={`${styles.arrowIcon} ${isCollapsed && styles.isOpen}`}
                >
                    {<ArrowIcon fill="white" />}
                </div>
            </div>
            <div
                className={`${styles.collapseContent} ${!isCollapsed && styles.isOpen}`}
                style={{ height: isCollapsed ? '0px' : contentHeight + 'px' }}
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    )
}

export default Toggle
