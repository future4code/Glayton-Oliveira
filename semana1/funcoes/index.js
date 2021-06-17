/* 1 - Exercícios de interpretação de código

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a) O que vai ser impresso no console? //Vai ser impresso 10 e 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função 
`minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?*/ //iria aparecer os mesmo 10 e 50 porque executei minha função normalmente



/* 2 - Exercícios de interpretação de código
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
```

a. Explique o que essa função faz e qual é sua utilidade// a utilidade dessa função vai servir para ->
// quando o usuário escrever o texto, ele fazer com que todos os caracteres digitas fiquem minuscula e ->
// que procure a palavra cenoura, caso tenha no texto digitado ele me retorna true, caso não retorna false

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura // eu gosto de cenoura /true todos ficam minusculo
     ii.  `CENOURA é bom pra vista // cenoura é bom pra vista /true todos ficam minusculo, se nao a cenoura iria retornar false por ser maiusculo
     iii. `Cenouras crescem na terra*/ //cenouras crescem na terra /false porque eu queria cenoura e nao cenouras

//------------------------------------------------Exercício01---------------------------------------------- 
/*a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas
 informações sobre você, como:*/
/*
 function dadosBasico() {
     console.log("Eu sou Glayton, tenho 27 anos, moro no Espirito Santo e sou estudante")
 }
 dadosBasico() 
 */

 /*b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o
nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma
string que unifique todas as informações da pessoa em uma só mensagem com o template:*/

/*function meusDados (nome,idade,cidade,profissao) {
    nome = "glayton"
    idade = 27
    cidade = "ES"
    profissao = "Estudante da Labenu"
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}.`)
}

meusDados()*/

//------------------------------------------------Exercício02---------------------------------------------- 

/*a)Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

/*function recebe2Numeros (n1,n2){
   const soma = n1 + n2
    return soma 
}
const resultado = recebe2Numeros(10,2)
console.log(resultado)*/

/*b)Faça uma função que recebe 2 números e retorne um booleano que informa
 se o primeiro número é maior ou igual ao segundo.*/

 /*function maiorOuMenor (numero1,numero2) {
     const verificacao = numero1>=numero2
     return verificacao
 }
 const verdadeOuNao = maiorOuMenor (3,2)
 console.log(verdadeOuNao)*/

 //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
/*
 function parOuImpar (par) {
     const resto = par%2==0
     return resto
 }
 const resultado = parOuImpar(11)
 console.log(`É par? ${resultado}`)
*/

/*d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem,
 juntamente com uma versão dela em letras maiúsculas.*/
/*
 const pergunta = prompt("escreva uma mensagem qualquer")

 function mensagem (mensagem1) {
     
     return mensagem1.toUpperCase()
 }
 const mensagem2 = mensagem(pergunta)
 console.log(mensagem2.length, mensagem2)
*/

//------------------------------------------------Exercício03---------------------------------------------- 

/* 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
 Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados
pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:*/
/*
const numero1 = Number(prompt("digite um numero"))
const numero2 = Number(prompt("digite outro numero"))

function operacoes (){

const r1 = numero1 + numero2
const r2 = numero1 - numero2
const r3 = numero1 * numero2
const r4 = numero1 / numero2
console.log(`Números inseridos: ${numero1} e ${numero2}
Soma:${r1}
Diferença: ${r2}
Multiplicação: ${r3}
Divisão: ${r4}`)

}
operacoes(numero1,numero2)
*/


//------------------------------------------------Exercícios---------------------------------------------- 

 

