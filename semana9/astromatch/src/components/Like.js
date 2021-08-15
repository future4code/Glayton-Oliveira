import React from "react"
import styled from "styled-components"

const BotaoLike = styled.div `
  position: absolute;
  width: 300px;
  height: 450px;
  left: 390px;
  top: 460px;
  display: flex;
  justify-content: end;
`

export default function Like() {


    return(
        <BotaoLike>
        <div>
           <button>LIKE</button> 
        </div>
        </BotaoLike>
    )
}