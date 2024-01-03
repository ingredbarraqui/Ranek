import React from 'react'
import Input from '../Input'
import styles from "./Login.module.css"
import Button from '../Button'
import Cadastro from '../Cadastro/Cadastro'

const Login = ({ }) => {
    const [cadastro, setCadastro] = React.useState(false)

    function handleClick() {
        setCadastro(true)
    }


    return (
        <div className={`${styles.login} container`}>
            <h1 >Login</h1>
            <form action="" method="get">
                <Input label="Nome de usuário ou E-mail" type="text" name="username" placeholder="Digite seu nome de usuário ou E-mail" />
                <Input label="Senha" type="password" name="password" placeholder="Senha" />
                <div className="mb-2 text-end">
                    <a href="https://ranekapi.origamid.dev/wp-login.php?action=lostpassword">Perdeu a senha? Clique aqui</a>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <label className="p-0" htmlFor="logado">
                        <input type="checkbox" className={styles.checkbox} name="logado" id="logado" />
                        Permanecer logado?
                    </label>
                    <Button>Logar</Button>
                </div>
            </form>
            <div className="mb-2 text-center">
                <p className='m-1'>Crie a Sua Conta</p>
                {!cadastro && < button className="btn btn-secondary" onClick={handleClick}>Criar conta</button>}
            </div>
            {cadastro && <Cadastro />}
        </div >
    )
}

export default Login