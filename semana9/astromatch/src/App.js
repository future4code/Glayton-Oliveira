import React from "react"
import styled from "styled-components"
import Like from "./components/Like";
import Dislike from "./components/Dislike";
import Match from "./components/Match";
import Perfil from "./components/Perfil";
import Clear from "./components/Clear"
import PerfilCard from "./components/PerfilCard";

const BordaGeral = styled.div `
  position: absolute;
  border: 2px solid black;
  width: 300px;
  height: 450px;
  left: 455px;
  top: 65px;
  display: flex;
  justify-content: center;
`

export default function App() {


  return (
  <div>

  <BordaGeral>
   <h4>AstroMatch</h4>
  </BordaGeral>
  
    <Like/>
    <Dislike/>
    <Match/>
    <Perfil/>
    <Clear/>
    

  </div>
  );
}


