import React, { ReactNode, useState } from 'react'
import styles from './index.module.css' // Assume a CSS module with relevant styles

interface IProps {
    children: ReactNode
}

const Collapse = ({ children }: IProps) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div
            className={`${styles.collapseContainer} ${isCollapsed && styles.isCollapsed}`}
        >
            <div className={styles.collapseLabel} onClick={toggleCollapse}>
                {isCollapsed ? 'Подробнее' : 'Скрыть'}
            </div>
            <div className={styles.collapseContent}>{children}</div>
        </div>
    )
}

export default Collapse
