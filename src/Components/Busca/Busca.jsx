import React from 'react'
import styles from "./Busca.module.css"
import Input from '../Form/Input'

const Busca = () => {
    return (
        <div className={styles.busca}>
            <h1>👍 Compre ou Venda 👎</h1>
            <form action="">
                <Input className={styles.campoBusca} type="text" placeholder='Buscar..' />
            </form>
        </div>
    )
}

export default Busca