//--------------------------------------------INTERPRETAÇÃO01--------------------------------------------

//1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/
//Vai ser impresso o valor 10, pois está somando 0+1+2+3+4 = 10 
//porque o contador está limitado até 4 porque 4<5 e 5=5 e não <5


//--------------------------------------------INTERPRETAÇÃO02--------------------------------------------

//2 - Leia o código abaixo:
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero < lista.length) {
		console.log(lista)
	}
}
*/

//a) O que vai ser impresso no console?
//vai tudo que for maior que 18 nesse array.


/*b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o
 `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?*/
//* sim tem como, poderia alterar o numero 18 para o nome do array que é a lista
//que ficaria o numero < lista.length e no console colocaria pra imprimir a lista.


//--------------------------------------------INTERPRETAÇÃO03--------------------------------------------

//3-Qual seria o resultado impresso no console, se o usuário digitasse o número 4?

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
//"  ****  " eu pensei que seria 4 astericos nessa ordem, porém depois de rodar o código eu percebi 
//que estava errado e sairia de um adicionando +1 em cada linha do asterisco 
//*
//**
//***
//****

//--------------------------------------------EXERCICIO01--------------------------------------------

//1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//a)Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
// um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console



const NumerosBichinhos = () =>{

    let bichinhos = Number(prompt("quantos bichinhos de estimação você tem no total?"))

    //let resposta = bichinhos

    let quantidade = []
    let contador = 1
    if(bichinhos === 0){
        console.log("Que pena! Você pode adotar um pet!")
    }else{
    while(contador <= bichinhos){
   
        let pergunta = prompt("Qual o nome de cada um?")
        quantidade.push(pergunta)

        contador++
        
    }
    return console.log(quantidade)
}
}
NumerosBichinhos()

  


//--------------------------------------------INTERPRETAÇÃO01--------------------------------------------

//--------------------------------------------INTERPRETAÇÃO01--------------------------------------------