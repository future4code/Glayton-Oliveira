import React from 'react'
import { useHistory } from 'react-router-dom'


export const AdminHomePage = () => {

    const history = useHistory()

    const paginaInicialHomePage = () => {
        history.push('/')
    }
    return(
        <div>

            <h1>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h1>


           <button onClick={paginaInicialHomePage}>Voltar ao início</button>
        </div>
    )

}