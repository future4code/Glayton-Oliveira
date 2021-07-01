```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
   let calculoMediaPonderada = (ex*1+p1*2+p2*3)/(1+2+3)
    let conceito
  if(calculoMediaPonderada >= 9){
    conceito = "A"
  }else if(calculoMediaPonderada < 9 && calculoMediaPonderada >= 7.5){
    conceito = "B"
  }else if(calculoMediaPonderada < 7.5 && calculoMediaPonderada >= 6){
    conceito = "C"
  }else{
    conceito = "D"
  }
  return conceito
}