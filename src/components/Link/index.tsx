import React from 'react'
import styles from './Link.module.css'

const Link = ({ children, ...remain }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className={styles.link} {...remain}>
            {children}
        </a>
    )
}

export default Link