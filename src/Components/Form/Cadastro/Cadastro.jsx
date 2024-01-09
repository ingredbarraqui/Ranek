import React from 'react'
import Input from '../Input'
import useForm from '../../../Hooks/useForm'


const Cadastro = () => {
    const email = useForm('email')

    return (
        <>
            <form>
                <Input label="Nome" type="text" name="nome" placeholder="Digite seu nome" />
                <Input label="E-mail" type="email" name="email" placeholder="Digite seu E-mail" {...email} />
                <Input label="Senha" type="password" name="password" placeholder="Digite sua senha" />
                <Input label="CEP" type="text" name="cep" placeholder="Digite seu Cep" maxLength="9" />
                <Input label="Rua" type="text" name="rua" placeholder="Sua rua" />
                <Input label="Numero" type="text" name="number" placeholder="Seu numero" />
                <Input label="Cidade" type="text" name="cidade" placeholder="Sua cidade" />
                <Input label="Estado" type="text" name="estado" placeholder="Seu estado" />
                <button className='btn btn-primary'>Criar Usuário</button>
            </form>

        </>

    )
}

export default Cadastro