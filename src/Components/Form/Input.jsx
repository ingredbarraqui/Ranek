import React from 'react'
import styles from './Input.module.css'

const Input = ({ type, name, value, onBlur, onChange, error, label, placeholder }) => {
    return (
        <div>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input
                className={styles.input}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}
export default Input