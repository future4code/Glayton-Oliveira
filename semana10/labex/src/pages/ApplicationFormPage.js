import React, { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
const ApplicationFormPageContainer = styled.div`
   color: black;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    text-align: center;
    padding: 50px 60px;
    border: 3px solid #eee;
    border-radius: 50px;
    background-color: greenyellow;
    font-size: 18px;
`
const ButtonBaixoContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 20px 30px;
`
export const ApplicationFormPage = () => {
    const history = useHistory()
    const voltarListTripsPage = () => {
        history.push("/trips/list")
    }
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [profissao, setProfissao] = useState("")
    const [viagemMaluca, setViagemMaluca] = useState("")
    return (
        <>
            <div>
                <ApplicationFormPageContainer>
                    <h1>Faça-se para uma viagem</h1>
                    <label>Digite seu nome:</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <p>Nome Digitado:{nome}</p>
                    <label>Digite sua idade:</label>
                    <input type="text" age="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
                    <p>Idade Digitada:{idade}</p>
                    <label>Digite sua Profissão:</label>
                    <input type="text" name="profissao" value={profissao} onChange={(e) => setProfissao(e.target.value)} />
                    <p>Profissão Digitada:{profissao}</p>
                    <label>Selecione um País</label>
                    <select value={viagemMaluca} onChange={(e) => setViagemMaluca(e.target.value)}>
                        <option value="Plutão">Nenhum</option>
                        <option value="Nebulosa">Nebulosa</option>
                        <option value="Buraco Negro">Buraco Negro</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Lua">Lua</option>
                        <option value="Plutão">Plutão</option>
                        <option value="Perdido em Marte">Perdido em Marte</option>
                    </select>
                    <p>País escolhido: {viagemMaluca}</p>
                </ApplicationFormPageContainer>
            </div>
            <ButtonBaixoContainer>
                <button onClick={voltarListTripsPage}>Voltar</button>
                <button>Enviar</button>
            </ButtonBaixoContainer>
        </>
    )
}