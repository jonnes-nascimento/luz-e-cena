import classNames from 'classnames'
import styles from './Button.module.css'
import React from 'react'

type ButtonProps = {
    variant: 'default' | 'icon'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, variant = 'default', ...remain }: ButtonProps) => {
    
    const classMap = {
        default: styles.default,
        icon: styles.icon
    }

    return (
        <button className={classNames(styles.botao, classMap[variant])} {...remain}>
            {children}
        </button>
    )
}

export default Button