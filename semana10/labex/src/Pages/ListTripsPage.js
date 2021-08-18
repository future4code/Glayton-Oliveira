//Para vermos todas as viagens
import axios from "axios"
import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import HomePage from "./HomePage"


export default function ListTripsPage() {

    const history = useHistory()

    const back = () => {
        history.goBack()
    }

    

    const [viagem, setViagem] = useState({})

    useEffect(() =>{
        listaViagem()
     },[])

    const listaViagem = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips")
        //authorization: glayton-verissimo
        .then(res => {
            setViagem(res.data.trips)
            console.log(res.data.trips)
            
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        <div>
            <button onClick={back}>Voltar</button>
            <button>Inscrever-se</button>
            <h1>Lista de viagens</h1>
            <p>{viagem.name}</p>
        </div>
    )
}