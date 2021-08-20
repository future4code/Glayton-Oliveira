import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import axios from "axios"

const ListTripsPageContainer = styled.div`
   color: black;
    text-align: center;
`
const CaixaNome = styled.div`
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
export const ListTripsPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    const voltarHomePage = () => {
        history.push("/")
    }
    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }
    const entrarViagens = () => {
        history.push("/admin/trips/list")
    }
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/yara/trips")
            .then((res) => {
                console.log(res.data.trips);
                setTrips(res.data.trips);
            }).catch((err) => {
                console.log();
            })
    }
    useEffect(() => {
        getTrips()
    }, []);
    const todasViagens = trips.map((viagem) => {
        return (
            <CaixaNome>
                <p>Planeta:{viagem.planet}</p>
                <p>Nome:{viagem.name}</p>
                <p>Data:{viagem.date}</p>
                <p>Duração de Dias:{viagem.durationInDays}</p>
                <p>Descrição:{viagem.description}</p>
            </CaixaNome>
        )
    })
    return (
        <ListTripsPageContainer>
            <button onClick={voltarHomePage}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <button onClick={entrarViagens}>Entrar para ver viagens</button>
            <h1>Lista de Viagens</h1>
            {todasViagens}
        </ListTripsPageContainer>
    )
}