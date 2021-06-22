// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = Number(prompt("digite a altura"))
 const largura = Number(prompt("digita a largura"))
 const area = altura * largura
 console.log(area)
}






// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite seu ano de nascimento"))
  const resultado = anoAtual - anoNascimento
  console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("diga seu nome")
const idade = Number(prompt("digite sua idade"))
const email = prompt("digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("qual é sua primeira cor favorita?")
  const cor2 = prompt("qual é sua segunda cor favorita?")
  const cor3 = prompt("qual é sua terceira cor favorira?")
  const array = [cor1,cor2,cor3]
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calculo = custo / valorIngresso
  return calculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const tamanho = string1 >= string2
  return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const tamanhoArray = array[0]
  return tamanhoArray

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const ultimoArray = array[array.length - 1]
return ultimoArray
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const troca = array.splice([0])
  return troca

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 
  return  string1.toLowerCase() === string2.toLowerCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("qual é o ano atual?"))
  const anoNascimento = Number(prompt("qual é o seu ano de nascimento?"))
  const carteiraAno = Number(prompt("ano de emissão da carteira?"))

  const maisRecente = (anoAtual - anoNascimento) 
  const razoavel = (anoAtual - anoNascimento) 
  const maisAntigo = (anoAtual - anoNascimento)



  const resultado1 = maisRecente <=20 && (anoAtual - carteiraAno) == 5
  const resultado2 = razoavel <=50 && (anoAtual - carteiraAno) == 10
  const resultado3 = maisAntigo >50 && (anoAtual - carteiraAno) == 15

  console.log(resultado1)
  console.log(resultado2)
  console.log(resultado3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}