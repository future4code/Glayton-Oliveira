```function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let maca1 = 1.3
  let maca2 = 1
  let precoFinal
  if(quantidade < 12){
    for(let i =0; i < quantidade; i++){
      precoFinal = quantidade * maca1
    }
    }else if(quantidade >= 12){
      for(let i =0; i < quantidade; i++){
      precoFinal = quantidade * maca2
    }
  }
  return precoFinal
}