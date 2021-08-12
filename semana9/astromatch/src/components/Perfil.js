import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

const Nome = styled.div `
  position: absolute;
  left: 460px;
  top: 340px;
  display: flex;
  justify-content: end;
`

const AgeBio = styled.div `
position: absolute;
 width: 200px;
  left: 460px;
  top: 360px;
  display: flex;
  justify-content: end;
`

const Img = styled.div `
    display:inline-block;
    margin: 1px;
    background: no-repeat center;
    background-size: cover;
    
`



export default function Perfil() {

    const [perfil, setPerfil] = useState({})

    

    useEffect(() =>{
       pegarPerfil()
    },[])

    const pegarPerfil = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        //authorization: glayton-lovelace
        .then(res => {
            setPerfil(res.data.profile)
            console.log(res.data.profile)
        })
        .catch(err => {
            console.log(err);
        })
    }
    


    return(
        <div>
            <Nome>
            <p>{perfil.name}, {perfil.age} </p>
            </Nome>
            <AgeBio>
            <p></p>
            <p>{perfil.bio}</p>
            </AgeBio>
            <Img>
            <img src={perfil.photo}/>
            </Img>
            
        </div>
    )
}
//<img src={perfil.photo}/>

