import React from "react"
import axios from "axios"
import styled from "styled-components"

const Cabeca = styled.div`
display: flex;
border: 2px solid black ;
justify-content: center;

height: 100px;
margin-top: 10px;
background-color: chartreuse;
`

const Corpo = styled.div`

display: flex;
height: 100px;

margin-left: 450px

`
const Play = styled.div`

display: flex;
height: 100px;

margin-left: 680px

`



export default class App extends React.Component{

 


  render(){
    return(
      <div>

        <Cabeca>
        <div>
         <h1>Labefy</h1>
        </div>
        </Cabeca>

        <Play>
        <h2>PlayList</h2>
        </Play>

        <Corpo>
        <div>
        <h4>Criação de PlayList</h4>
        <input type="text" name="search" placeholder="Nome da musica" />
        <input type="text" name="search" placeholder="Nome do artista" />
        <input type="text" name="search" placeholder="URL da música" />
        <input type="submit" value="Enviar" />
        </div>
        </Corpo>

      </div>
     
    )
  }
}
