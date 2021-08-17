import React from "react"
import styled from "styled-components"

const BotaoDislike = styled.div `
  position: absolute;
  width: 300px;
  height: 450px;
  left: 255px;
  top: 460px;
  display: flex;
  justify-content: end;
`

export default function Dislike() {


    return(
        <BotaoDislike>
        <div>
           <button>DISLIKE</button>
        </div>
        </BotaoDislike>
    )
}