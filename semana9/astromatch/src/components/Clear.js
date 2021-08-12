import React, {useEffect, useState} from "react"
import styled from "styled-components"
import axios from "axios"

const LimparPerfil = styled.div `
  position: absolute;
  width: 50px;
  height: 50px;
  left: 585px;
  top: 10px;
  display: flex;
  justify-content: end;
`


export default function Clear() {

    const [clear, setClear] = useState({})

    useEffect(() =>{
        limparPerfil()
     },[])
 
     const limparPerfil = () => {
         axios
         .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear")
         //authorization: glayton-lovelace
         .then(res => {
             //setClear(res.data)
             console.log(res.data)
         })
         .catch(err => {
             console.log(err);
             alert("error")
         })
     }

     const changeClear = () =>{
        setClear(limparPerfil)
        alert("Limpo")
     }
    return(
        <div>
            <LimparPerfil>
            <button value={clear} onClick={changeClear}>Limpar Perfil</button>
            </LimparPerfil>
        </div>
    )
}