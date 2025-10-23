import React from 'react'
import styles from './SelectorGroup.module.css'

interface SelectorGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon?: React.ReactNode
}

const SelectorGroup = ({ icon, children, ...remain }: SelectorGroupProps) => {
    return (
        <div className={styles.container}>
            {
                icon && <div className={styles.icone}>
                    {icon}
                </div>
            }

            <select className={styles.selector} {...remain}>
                {children}
            </select>
        </div>
    )
}

export default SelectorGroup