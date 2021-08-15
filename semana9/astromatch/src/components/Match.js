import React from "react"
import styled from "styled-components"

const BotaoMatch = styled.div `
  position: absolute;
  width: 300px;
  height: 450px;
  left: 450px;
  top: 75px;
  display: flex;
  justify-content: end;
`


export default function Match() {

    

    return(
        <BotaoMatch>
        <div>
           <button>Match</button> 
        </div>
        </BotaoMatch>
    )
}