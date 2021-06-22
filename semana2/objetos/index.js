//-----------------------------------------exercicio interpretação1----------------------------------------------------------
/*1 - Leia o código abaixo
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

//a) O que vai ser impresso no console?

// serão impresso na tela | Matheus Nachtergaele | Virginia Cavendish | Canal: globo, horario: 14h

//-----------------------------------------exercicio interpretação2----------------------------------------------------------

//2
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

//a)O que vai ser impresso no console?
//1 - vai ser impresso nome: Juca idade: 3 raca: SRD 
//2 - vai ser clonado o cachooro, só que o nome do gata será Juba
//3 - vai ser clonado o gato que veio a ser clonado do cachorro e vai receber o no de Jubo

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// a sintaxe é feita pra clonar ou também pra expandir no caso o array

//-----------------------------------------exercicio interpretação3----------------------------------------------------------

//3-Leia o código abaixo

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//a) O que vai ser impresso no console?
//vai ser impresso apenas false ou simplesmente undefined -- depois eu coloquei o codigo pra rodar e acabou saindo os dois false e undefined 

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//Porque ele não foi declarado no escopo no caso a altura era indefinida na função e não existe no objeto



//-----------------------------------------------exercicio1----------------------------------------------------

/*Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
(um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como
 entrada um objeto e imprime uma mensagem no modelo abaixo:*/

 /*const pessoa = {
     nome: "Glayton",
     apelidos: ["Glaytinho", "Ton", "GV"]
 }
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},
 ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)*/

/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
 mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
como argumento o novo objeto*/

/*const novoApelido = { ...pessoa, apelidos: ["Tonton", "Glayglay", "Tonzin"]
    
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novoApelido.apelidos[0]},
 ${novoApelido.apelidos[1]} ou ${novoApelido.apelidos[2]}`)*/

//-----------------------------------------------exercicio2----------------------------------------------------                                                                                                            

//Resolva os passos a seguir: 
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
/*
const pessoa1 = {
    nome: "Jessica",
    idade: 24,
    profissao: "Veterinária",
    arrayFinal1: () => {
        let array1 = [pessoa1.nome, pessoa1.nome.length,pessoa1.idade,pessoa1.profissao,pessoa1.profissao.length]
        
        return console.log(array1)
    
    }
}

const pessoa2 = {
    nome: "felipe",
    idade: 25,
    profissao: "Auxiliar Administrativo",
    arrayFinal2: () => {
        let array2 = [pessoa2.nome, pessoa2.nome.length,pessoa2.idade,pessoa2.profissao,pessoa2.profissao.length]
        
        return console.log(array2)
    
    }
}

pessoa1.arrayFinal1()
pessoa2.arrayFinal2()
*/


//----------------------------------------------exercicio3-----------------------------------------------------

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

//const carrinho = []

/*b) Crie três novos objetos que representem frutas de um sacolão.
 Eles devem ter as seguintes propriedades: nome (string) e disponibilidade
  (boolean - devem começar como true)*/
/*
  const fruta1 = {
    nome: "uva",
    disponibilidade: true
  }
  const fruta2 = {
    nome: "maça",
    disponibilidade: true
  }
  const fruta3 = {
    nome: "caju",
    disponibilidade: true
  }
*/
/*c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho.
 Invoque essa função passando os três objetos criados.*/
/*
 function frutasCarrinho () {
    carrinho.push(fruta1,fruta2,fruta3)
    return console.log(carrinho)
 }
 //d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

 frutasCarrinho()
*/

//----------------------------------------------desafio1-----------------------------------------------------

/*Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima
 no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também
  o tipo dele para garantir que é um objeto.*/
/*
  function pergunta() {
    const nome = prompt("qual é seu nome?")
    const idade = Number(prompt("qual é sua idade?"))
    const profissao = prompt("diga sua profissão")
    return console.log(`nome: ${nome}, profissão: ${profissao}, idade: ${idade}`)
  }

const minhaFuncao = {
    completo: pergunta()
}

console.log(minhaFuncao)
*/

//----------------------------------------------desafio2-----------------------------------------------------

/* 2 - Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades:
 ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:*/
/*

 function lancamento() {
    const filme1 = {
    nome1: "Batman e Robin",
    anoLancamento1: 1997
}
    const filme2 = {
    nome2: "Tropas Estrelares",
     anoLancamento2: 1997  
    }
    const resultado1 = filme1.anoLancamento1 > filme2.anoLancamento2
    const resultado2 = filme1.anoLancamento1 === filme2.anoLancamento2
    return console.log(`O primeiro filme foi lançado lançado antes do segundo? ${resultado1}`)
     || console.log(`O primeiro filme foi lançado no mesmo ano que o segundo? ${resultado2}`)
 }

 lancamento()

 */


