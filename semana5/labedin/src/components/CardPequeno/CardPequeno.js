import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="small-container">
            <img src={ props.imagem } />
            <div>
                <h5>{ props.email }</h5>
                <h5>{ props.endereco }</h5>
            
            </div>
        </div>
    )
}

export default CardPequeno;


