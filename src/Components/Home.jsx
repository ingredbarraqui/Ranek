import React from 'react'
import ListaProdutos from './Produtos/ListaProdutos'
import Footer from './Footer/Footer'
import Busca from './Busca/Busca'

const Home = () => {
    return (
        <div>
            <Busca />
            <ListaProdutos />
        </div>
    )
}

export default Home