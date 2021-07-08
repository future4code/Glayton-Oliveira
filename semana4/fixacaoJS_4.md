function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  for(let i = 0; i < arrayDeNumeros; i++){
    if(numeroEscolhido===4) {
      numeroEscolhido++
      console.log(`O número ${numeroEscolhido} aparece ${arrayDeNumeros.length}x`)
    }else{
      console.log("Número não encontrado")
    }
    return numeroEscolhido
  }
  
  
}