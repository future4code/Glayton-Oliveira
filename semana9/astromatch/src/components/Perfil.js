import React, { useEffect, useState } from "react"
import axios from "axios"

export default function Perfil() {

    const [perfil, setPerfil] = useState({})

    useEffect(() =>{
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then(res => {
            console.log(res.data.profile)
        })
        .catch(err => {
            console.log(err);
        })

    },[])
    

  

    return(
        <div>
            
        </div>
    )
}

