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
  position: absolute;
  left: 510px;
  top: 125px;
  display: flex;
  justify-content: end;
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
            <p>{perfil.bio}</p>
            </AgeBio>
            <Img>
            <img width='200px' height='200px' src={perfil.photo}/>
            </Img>
            
        </div>
    )
}


