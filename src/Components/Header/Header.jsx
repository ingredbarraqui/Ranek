import React from 'react'
import Button from 'react-bootstrap/Button';
import raneck from "../../assets/ranek.svg"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={`${styles.header} d-flex justify-content-between`}>
            <img className={styles.logo} src={raneck} />
            <Button>Vender / Login</Button>
        </header>
    )
}

export default Header