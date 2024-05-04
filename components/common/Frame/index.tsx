import React from 'react'

import { EFrameTheme, IFrameProps } from './types'

import styles from './index.module.css'

const Frame = ({
    children,
    theme = EFrameTheme.DARK,
    className,
    withOutline,
    ...rest
}: IFrameProps) => {
    const classes = `${styles.frameWrapper} ${styles[theme]} ${className}`

    return withOutline ? (
        <div className={styles.wrapperOutline}>
            <div className={classes} {...rest}>
                {children}
            </div>
        </div>
    ) : (
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}

export default Frame

export { EFrameTheme }
