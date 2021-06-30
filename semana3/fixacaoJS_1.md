```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salarioFuncionario = 2000
let salarioFinal
if(qtdeCarrosVendidos > 0){
  for(let i = 0; i < qtdeCarrosVendidos; i++){
    salarioFuncionario += 100
    salarioFinal = valorTotalVendas * 0.05
  }
  return salarioFuncionario += salarioFinal
}else{
  return salarioFuncionario
}

}