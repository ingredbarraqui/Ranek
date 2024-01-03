import React from 'react'
import raneck from "../../assets/ranek.svg"
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header >
            <nav className={`${styles.header} d-flex justify-content-between align-items-center`}>
                <Link to="/" className={styles.logo}><img className='w-100' src={raneck} /></Link >
                <Link to="/Login"><button className='btn btn-primary'>Vender / Login</button></Link>
            </nav>
        </header>
    )
}

export default Header