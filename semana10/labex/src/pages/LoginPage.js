import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const LoginPageContainer = styled.div`
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
const ButtonLogin = styled.div`
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`
export const LoginPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    const voltarHomePage = () => {
        history.push("/")
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const onSubmitLogin = () => {
        console.log(email, password);
        const body = {
        email: email,
        password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/yara/login", body)
        .then((response) => {
            console.log("Deu certo:", response.data);
        }).catch((error) => {
            console.log("Deu errado:", error.response);
        })
    }
    return (
        <div>
            <div>
                <LoginPageContainer>
                    <h1>LoginPage</h1>
                    <input
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <button onClick={onSubmitLogin}>Enviar</button>
                </LoginPageContainer>
                <ButtonLogin>
                <button onClick={voltarHomePage}>Voltar</button>
                </ButtonLogin>
            </div>
        </div>
    )
}