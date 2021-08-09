import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [comentario, setComentario] = useState("")
	//const [saveComentario, setSaveComentario] = useState([])


	const onChangeComentario = (event) => {
		setComentario(event.target.value)
	}
/*
	const addComentario = () => {
		const novoComentario =[...saveComentario]
		novoComentario.push(comentario)
		setSaveComentario(novoComentario)
		setComentario("")
	}
	*/
	

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={comentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario() }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario