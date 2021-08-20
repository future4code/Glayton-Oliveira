import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
export const TripeDetailsPage = () => {
    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/yara-lovelace/trip/Gp1xQSj7OdQZMcEd4JeV", {
            headers: {
                auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9tYU9Fa3R3b3dCa1dnYmNta3lvIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2Mjk0NjU3MDl9.SiLK_FqIDODe265CWVFZo4-kYQzE5W5HWAxGM0bJ0NA"
            }
        })
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log("Deu erro:", error.response)
        })
    }, [])
    const history = useHistory()
    const entrarEmAdminHomePage = () => {
        history.push("/admin/trips/:id")
    }
    return(
        <div>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <button onClick={entrarEmAdminHomePage}>Ver detalhes de uma viagem específica</button>
            </div>
    )
}