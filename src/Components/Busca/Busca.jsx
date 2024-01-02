import React from 'react'
import styles from "./Busca.module.css"

const Busca = () => {
    return (
        <div className={styles.busca}>
            <h1>👍 Compre ou Venda 👎</h1>
            <form action="">
                <input className={styles.campoBusca} type="text" placeholder='Buscar..' />
                <input className={styles.lupa} type="submit" id="lupa" value="Buscar" />
            </form>
        </div>
    )
}

export default Busca