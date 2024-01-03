import React from 'react'
import Input from '../Input'

const Cadastro = () => {
    return (
        <>
            <form action="">
                <Input label="Nome" type="text" name="nome" placeholder="Digite seu nome" />
                <Input label="E-mail" type="email" name="email" placeholder="Digite seu E-mail" />
                <Input label="Senha" type="password" name="password" placeholder="Digite sua senha" />
                <Input label="CEP" type="text" name="password" placeholder="Digite seu Cep" />
                <Input label="Rua" type="text" name="cep" placeholder="Sua rua" />
                <Input label="Numero" type="text" name="number" placeholder="Seu numero" />
                <Input label="Cidade" type="text" name="city" placeholder="Sua cidade" />
                <Input label="Estado" type="text" name="password" placeholder="Seu estado" />
                <button className='btn btn-primary'>Criar Usuário</button>
            </form>

        </>

    )
}

export default Cadastro