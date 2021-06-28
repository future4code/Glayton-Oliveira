/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const jogoPrincipal = () =>{ 
const usuarioCarta1 = comprarCarta()
const computadorCarta1 = comprarCarta()
if(usuarioCarta1[0] === computadorCarta1[0]) { 
      console.log(usuarioCarta1)
      console.log(computadorCarta1) 
}
}
jogoPrincipal()