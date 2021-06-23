
//--------------------------------------INTERPRETAÇÃO01--------------------------------------------

//1 - Leia o código abaixo:
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//a) Explique o que o código faz. Qual o teste que ele realiza? 

/* o codigo faz com que o usuario digite na tela algum numero e esse numero caso tenha o resto de 2 = 0
 ele retornar como verdadeiro imprimindo "Passou no teste", caso se for diferente de 0 imprime "não passou
no teste"*/

//b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Para todo numero par

//c) Para que tipos de números a mensagem é "Não passou no teste"?

// Para todo numero impar

//--------------------------------------INTERPRETAÇÃO02--------------------------------------------

/*2-O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar
 algumas tarefas de um supermercado:*/

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

//a) Para que serve o código acima?

//Serve para o valor da fruta escolhida pelo usuario.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//O preço da fruta Maça é R$2.25

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
//no console se retirássemos o `break` que está logo acima do `default`
//(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// Tirando break ele pecorre até o ultimo break do default, onde o valor do preço é alterado de 5.5 para 5


//--------------------------------------INTERPRETAÇÃO03--------------------------------------------

//3-Leia o código abaixo:

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

//a) O que a primeira linha está fazendo?

//Pedindo o usuario para digitar um numero

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//Se ele digitasse o numero 10 iria imprimir na tela "Esse número passou no teste" e iria imprimir
//Se ele digitasse o numero -10 não iria imprimir nada, pois -10 não é maior que 0, retorandno falso


//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

/*Sim, vai relatar que houve erro de variavel não definida, pois a condição não está no escopo global
 e com isso a pessoa acabou chamando a varial mensagem fora do escopo local e somente o local tem acesso ao global
 no geral o escopo global não pode entrar na escopo da variavel(local), mas o inverso pode.
 o erro foi chamar a variavel pelo escopo global dentro do escopo da variavel(local).*/

 //--------------------------------------EXERCÍCIOS01--------------------------------------------
/*
 a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

 b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
 
 c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
  imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."
  */
/*
  const idade = Number(prompt("digite sua idade"))
  const respostaIdade = idade
  
  if(respostaIdade < 18) {
    console.log("Você não pode dirigir!")
  }else{
    console.log("Você pode dirigir!")
  }
  */

  //--------------------------------------EXERCÍCIOS02--------------------------------------------

  /*Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M
   (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!"
    ou "Boa Noite!". Utilize o bloco if/else*/
/*
  const turno = prompt("digite M (matutino) ou V (Vespertino) ou N (Noturno)")
  const resposta = turno

  const matutino = "M"
  const vespertino = "V"
  const noturno = "N"

  if(resposta.toUpperCase() === matutino ){
    console.log("Bom Dia!")
  }else if(resposta.toUpperCase() === vespertino){
    console.log("Boa Tarde!")
  }else if(resposta.toUpperCase() === noturno){
    console.log("Boa Noite!")
  }else{
    console.log("Não entendi, desculpa!")
  }
*/

//--------------------------------------EXERCÍCIOS03--------------------------------------------

//3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
/*
const turnoEstudante = prompt("digite M (matutino) ou V (Vespertino) ou N (Noturno)")
//const respostaTurno = turnoEstudante

switch (turnoEstudante.toUpperCase()) {
  case "M":
    console.log("Bom Dia!")
  break

  case "V":
    console.log("Boa Tarde!")
  break

  case "N":
    console.log("Boa Noite!")
  break

  default:
    console.log("Não entendi, desculpa!") 
}
*/

//--------------------------------------EXERCÍCIOS04--------------------------------------------

/*Considere a situação: você vai ao cinema com um amigo ou amiga,
porém ele/ela só assistirá a um filme com você se ele for do gênero
fantasia e se o ingresso está abaixo de 15 reais. Faça um código que
pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta
sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário,
imprima "Escolha outro filme :("*/

/*
const generoFilme = prompt("Qual o gênero do filme que vamos assistir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

const respostaFilme = generoFilme
const respostaIngresso = valorIngresso

if(respostaFilme.toLowerCase() === "fantasia" && respostaIngresso <= 15) {
              console.log("Bom filme!")
}else{
              console.log("Escolha outro filme :(")
}
*/

//--------------------------------------DESAFIOS01--------------------------------------------

/*Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!",
 pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) 
 e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] 
 pelo que o usuário colocou no input.*/
/*
const funcaoGeneroFilme = () =>{
const generoFilme = prompt("Qual o gênero do filme que vamos assistir?")
const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

const respostaFilme = generoFilme
const respostaIngresso = valorIngresso

if(respostaFilme.toLowerCase() === "fantasia" && respostaIngresso <= 15) {
  const lanche = prompt("Qual o lanchinho você vai comprar?")
  const lanchinho = lanche
    console.log(`Bom filme! e aproveita o seu ${lanchinho}.`)
}else{
    console.log("Escolha outro filme :(")
}
}
funcaoGeneroFilme()
*/

//--------------------------------------DESAFIOS02--------------------------------------------
/*
Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
Para esta compra, o usuário deve fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` .
Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total
que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos,
mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/

const sistemaVendasIngressos = () => {
const nomeCompleto = prompt("Qual é o seu nome completo?")
const tipoDeJogo = prompt("Qual é o tipo de jogo IN ou DO?")
const etapaJogo = prompt("Qual é a etapa do jogo? SF - DT ou FI ?")
const categoria = Number(prompt("Qual a categoria do jogo? 1, 2, 3 ou 4?"))
const qtsIngresso = Number(prompt("Qual a quantidade de ingressos que deseja?"))



console.log("---DADOS DA COMPRA---")
console.log("Nome do Cliente:", nomeCompleto)
if(tipoDeJogo.toLowerCase() === "do" ) {
console.log("Tipo de Jogo: Nacional")
}else{
console.log("Tipo de Jogo: Internacional")
}

if(etapaJogo.toLowerCase() === "sf") {
  console.log("Etapa do Jogo: Semi Final")
}else if(etapaJogo.toLowerCase() === "dt"){
  console.log("Etapa do Jogo: Decisão do 3º Lugar")
}else{
  console.log("Etapa do Jogo: Final")
}

switch (categoria) {
  case 1:
  console.log("Categoria: 1")
  break
  case 2:
  console.log("Categoria: 2")
  break
  case 3:
  console.log("Categoria: 3")  
  case 4:
  console.log("Categoria: 4")
  break
    }
  console.log("Quantidade de ingressos:", qtsIngresso, "ingressos")
  console.log("---Valores---")

  const categoriaSf1 = 1320
  const categoriaSf2 = 880
  const categoriaSf3 = 550
  const categoriaSf4 = 220
  const categoriaDt1 = 660
  const categoriaDt2 = 440
  const categoriaDt3 = 330
  const categoriaDt4 = 170
  const categoriaFi1 = 1980
  const categoriaFi2 = 1320
  const categoriaFi3 = 880
  const categoriaFi4 = 330

  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "sf" && categoria === 1){
    console.log("Valor do ingresso:", categoriaSf1)
    console.log("Valor total:",categoriaSf1*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaSf1*4.1)
    console.log("Valor total:",(categoriaSf1*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "sf" && categoria === 2){
    console.log("Valor do ingresso:", categoriaSf2)
    console.log("Valor total:",categoriaSf2*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaSf2*4.1)
    console.log("Valor total:",(categoriaSf2*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "sf" && categoria === 3){
    console.log("Valor do ingresso:", categoriaSf3)
    console.log("Valor total:",categoriaSf3*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaSf3*4.1)
    console.log("Valor total:",(categoriaSf3*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "sf" && categoria === 4){
    console.log("Valor do ingresso:", categoriaSf4)
    console.log("Valor total:",categoriaSf4*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaSf4*4.1)
    console.log("Valor total:",(categoriaSf4*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "dt" && categoria === 1){
    console.log("Valor do ingresso:", categoriaDt1)
    console.log("Valor total:",categoriaDt1*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaDt1*4.1)
    console.log("Valor total:",(categoriaDt1*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "dt" && categoria === 2){
    console.log("Valor do ingresso:", categoriaDt2)
    console.log("Valor total:",categoriaDt2*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaDt2*4.1)
    console.log("Valor total:",(categoriaDt2*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "dt" && categoria === 3){
    console.log("Valor do ingresso:", categoriaDt3)
    console.log("Valor total:",categoriaDt3*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaDt3*4.1)
    console.log("Valor total:",(categoriaDt3*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "dt" && categoria === 4){
    console.log("Valor do ingresso:", categoriaDt4)
    console.log("Valor total:",categoriaDt4*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaDt4*4.1)
    console.log("Valor total:",(categoriaDt4*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "fi" && categoria === 1){
    console.log("Valor do ingresso:", categoriaFi1)
    console.log("Valor total:",categoriaFi1*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaFi1*4.1)
    console.log("Valor total:",(categoriaFi1*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "fi" && categoria === 2){
    console.log("Valor do ingresso:", categoriaFi2)
    console.log("Valor total:",categoriaFi2*qtsIngresso)
  }else{
    console.log("valor do ingresso",categoriaFi2*4.1)
    console.log("Valor total:",(categoriaFi2*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "fi" && categoria === 3){
    console.log("Valor do ingresso:", categoriaFi3)
    console.log("Valor total:",categoriaFi3*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaFi3*4.1)
    console.log("Valor total:",(categoriaFi3*4.1)*qtsIngresso)
  }
  
  if(tipoDeJogo.toLowerCase() === "do" && etapaJogo.toLowerCase() === "fi" && categoria === 4){
    console.log("Valor do ingresso:", categoriaFi4)
    console.log("Valor total:",categoriaFi4*qtsIngresso)
  }else{
    console.log("valor do ingresso:",categoriaFi4*4.1)
    console.log("Valor total:",(categoriaFi3*4.1)*qtsIngresso)
  }

}

sistemaVendasIngressos()

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH

//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH




















