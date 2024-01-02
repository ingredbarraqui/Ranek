import React from 'react'
import { PRODUTOS_GET } from '../../API'
import useFetch from '../../Hooks/useFetch'
import styles from './ListaProdutos.module.css'

const ListaProdutos = () => {
    const { data, request } = useFetch();
    React.useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PRODUTOS_GET();
            const { response, json } = await request(url, options);

        }
        fetchPhotos();
    }, [request]);



    if (data)
        return (
            <div className='container'>
                <div className='d-flex justify-content-center gap-3 flex-wrap col-12'>
                    {data.map((produto) => (
                        <li className={`${styles.produto} col-3`} key={produto.id}>
                            <img className='w-100' src={produto.fotos[0].src} alt={produto.title} />
                            <div className='d-flex flex-column pt-2'>
                                <h3>{produto.nome}</h3>
                                <p className='my-0'>{produto.descricao}</p>
                                <span className="my-2 py-2">R${produto.preco.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</span>
                                <button className='btn btn-primary'>Comprar</button>
                            </div>

                        </li>
                    ))}
                </div>
            </div>
        );
    else return null;
};

export default ListaProdutos;