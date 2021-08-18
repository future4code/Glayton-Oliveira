//Para o usuário escolher entre Área Administrativa e Lista de Viagens
import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const MiddleTela = styled.div`
display: flex;
justify-content: center;
color: greenyellow;

`
const Button = styled.div`
display: flex;
justify-content: center;

`

export default function HomePage() {

    const history = useHistory()    

    const goToViagem = () =>{
        history.push("/viagem")
    }

    return(
        <div>
    <MiddleTela>
    <h2>LabeX</h2>
    </MiddleTela>
    <Button>
    <button onClick={goToViagem}>Ver viagens</button>
    <button>Área de Admin</button>
    </Button>
        </div>
    )
}