//Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    
   /* let array
    console.log('a. ', array)  // vai aparecer undefined pois não está declarada com nenhum valor

    array = null
    console.log('b. ', array)  // vai aparecer b . null pois foi declarada apenas com null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
    console.log('c. ', array.length) //vai aparecer c. (11) que é o comprimento da array

    let i = 0
    console.log('d. ', array[i]) // vai chamar o indice do array, no caso ele chamou o i e i = 0 então chamou o primeiro do array que é o 3

    array[i+1] = 19
    console.log('e. ', array) // aqui eu nao consigo compreender só de ver, mas pelo o que posso imaginar é adicinando +1 no array, porém esse = 19 eu nao entendi

    const valor = array[i+6] // aqui também pelo que posso entender é que está adicionando no indice +6 dentro do array ou ele ta tornando o meu antigo array em 6
    console.log('f. ', valor)*/

// --------------------------------------------//---------------------------------------------------
    

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"*/
// SUBI NUM ÔNIBUS EM MIRROCOS (28)

// --------------------------------------------//---------------------------------------------------

/* Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
 imprima na tela a seguinte mensagem: O e-mail emailDoUsuario foi cadastrado com sucesso.
  Seja bem-vinda(o), nomeDoUsuario!*/

  /*const email = prompt("Digite seu e-mail")
  const nome = prompt("Digite seu nome")
  console.log(`O e-mail ${email} foi cadastrado com sucesso.
  Seja bem-vinda(o), ${nome}`)*/

// --------------------------------------------//---------------------------------------------------

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
Em seguida, siga os passos:
a) Imprima na tela o array completo
b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista*/

/*const comidasPreferidas = ["macarronada", "feijoada", "lasanha", "açai", "pizza" ] // só coisa saúdavel, mas é gostoso kk ainda bem que nao como isso direto <3

console.log(comidasPreferidas)
console.log("essas são minhas comidas preferidas", comidasPreferidas)

const comidaDoUsuario =(prompt("Qual é sua comida preferida?"))

comidasPreferidas.splice(1,1)
comidasPreferidas.push(comidaDoUsuario)

console.log(comidasPreferidas)*/

// --------------------------------------------//---------------------------------------------------

/*Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array na tela
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array na tela*/

/*const listaDeTarefas = []

const tarefa1 = prompt("Digite a primeira tarefa do dia")
const tarefa2 = prompt("Agora digite a segunda tarefa do dia")
const tarefa3 = prompt("por fim, digite a ultima tarefa do dai")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("insira um numero de 1 a 3"))

console.log("Entendi, você realizou a tarefa",listaDeTarefas[tarefaRealizada-1])

listaDeTarefas.splice(tarefaRealizada-1, 1)

console.log(listaDeTarefas)*/

// --------------------------------------------//---------------------------------------------------

//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

/*const frase = prompt("digite uma frase")
const array = [frase]

console.log(array)
*/

// --------------------------------------------//---------------------------------------------------

/*Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice 
quanto o tamanho do array*/

/*const frutas = ["banana", "morango", "abacaxi", "laranja", "ameixa"]

//let frutas1 = frutas.indexOf("abacaxi")
//console.log(frutas1)

//console.log(frutas.indexOf(abacaxi)) // achei na internet, sei lá eu tentei kk
console.log(frutas.length)
console.log(frutas[2].length)*/  