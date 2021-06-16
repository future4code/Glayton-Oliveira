/* 1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  // vai indicar "a . false"

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  // " b . false"

resultado = !resultado && (bool1 || bool2)  
console.log("c. ", resultado) // "c . true"

console.log("d. ", typeof resultado) // tipo booleano true e false*/
//----------------------------------------------------------------------------------------------------------
/* 2 -Seu colega se aproxima de você falando que o código dele não funciona como devia. 
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
## O erro é porque ele ta somando duas string e teria que colocar o Number na frente do prompt,
pois só assim o js vai entender que são numero... 
*/
//----------------------------------------------------------------------------------------------------------
/* 3 -Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja,
 de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//----------------------------------------------------------------------------------------------------------

/*const idade1 = Number(prompt("Qual é a sua idade?"));
const idade2 = Number(prompt("Qual é a idade do seu melhor amigo(a)?"));

console.log("Sua idade é maior do que a do seu amigo(a)?", idade1>idade2);
console.log("A diferença de idade entre vocês é de", idade1-idade2); */

//----------------------------------------------------------------------------------------------------------

/*let numeroPar = Number(prompt("digite um numero par"));

numeroPar = numeroPar % 2

console.log("o resto da divisão é ", numeroPar);
//Depois de testar, percebe que o resultado volta 0 devido que o resto da divisão por qualquer numero par divido por 2 é = 0
//Quando digitado uma letra impar ele me retorna 1 devido que o resto da divisao por qualquer numero que seja impar por 2 é = 1*/

//----------------------------------------------------------------------------------------------------------

/*let idade = Number(prompt("Qual é sua idade?"));
let meses = 12;
let dias = 365;
let horas = 8.760;

meses *= idade;
dias *= idade;
horas *= idade;

console.log("Você tem ", idade,"anos de idade");
console.log("Você tem",meses, "meses de idade");
console.log("Você tem",horas, "horas de idade");
*/

//----------------------------------------------------------------------------------------------------------

/*
let numero1 = +(prompt("digite o primeiro numero"));
let numero2 = +(prompt("digite o segundo numero"));

    
console.log("O primeiro numero é maior que o segundo numero?", numero1>numero2);
console.log("O primeiro numero é igual ao seundo numero?", numero1==numero2);
console.log("O primeiro numero é divisivel pelo segundo numero?", numero1%numero2==0);
console.log("O segundo numero é divisivel pelo primeiro numero?", numero2%numero1==0);
*/

//------------------------------------------------------------------------------------------------

/*Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura
 entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:*/
/*
let celsius = 0;
let fahrenheit = 32;
let kelvin = 273.15;
let kelvin2 = 273.15

kelvin = (77 - 32)*(5/9) + 273.15;
celsius = 80*(9/5) + 32;
fahrenheit = 30*(9/5) + 32;
kelvin2 = 30 + 273.15;

console.log("A conversão de 77ºF para Kelvin é de", kelvin,"K")
console.log("A conversão de 80ºC para Fahrenheit é de", celsius,"ºF")
console.log("A conversão de 30ºC para Fahrenheit é de", fahrenheit,"ºF e para Kelvin é",kelvin2,"K" )*/

//------------------------------------------------------------------------------------------------

/* Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia
 elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba
  a quantidade de quilowatts consumida por uma residência.*/

 // let consumo = Number(prompt("qual a quantidade de quilowatts consumida?"))
  let quilowatt = 0.05
  let energia1
  let energia2
//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
  //quilowatt*280
  //console.log("a residencia que gasta 280quilowatts, tera que pagar R$",quilowatt,"kWh");

  /*Altere o programa para receber mais um valor: a porcentagem de desconto. 
  Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto*/ 

  /*energia1 = (quilowatt * 280);
  energia2 = (quilowatt * 280) * 0.15;

  quilowatt = resultado1 - resultado2;
  
  
  console.log("a residencia que gasta 280quilowatts, com 15% de desconto tera que pagar R$",quilowatt,"kWh")*/

  //------------------------------------------------------------------------------------------------

  /*a) Procure uma forma de converter libra (lb) para quilo (kg) e escreva um programa que converta
   20lb para kg. Imprima  a resposta no console da seguinte forma:*/

   /*let lb = 20;
   let kg = 0.45 // 1lb = 0,45kg;

   lb*=kg;

   console.log("20 lb equivalem a",lb,"Kg");*/

   /*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta
    10.5oz para kg. Imprima  a resposta no console da seguinte forma:*/

    let oz = 10.5;
    let kg1 = 0.03; // 1oz = 0,03kg, arrendodando 

    oz*=kg1;
    
    console.log("10.5oz equivalem a",oz,"Kg");

    /*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft 
    para m. Imprima  a resposta no console da seguinte forma: */

    let ft = 50
    let m = 0.3048//1 ft = 0,3048m

    ft*=m

    console.log("50ft equivalem a",ft,"m");

    /*Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal
    para litro. Imprima  a resposta no console da seguinte forma:*/

    let gal = 103.56
    let litro = 3.79 // 1gal = 3.79L arredondei

    gal*=litro

    console.log("103.56 gal equivalem a",gal,"L")

   /* Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic
    para litro. Imprima  a resposta no console da seguinte forma: */

    let xic = 450 //quantidade final de xicara
    let litro1 = 0.15 // uma xicara tem 150ml ou 0,15L 

    xic*=litro1

    console.log("450 xic equivalem a",xic,"L")

    /*Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o 
    valor da unidade original antes de converter*/

   let lb = Number(prompt("digite um valor para saber a conversão!"));
   let kg = 0.45 // 1lb = 0,45kg;

   lb*=kg;

   console.log("20 lb equivalem a",lb,"Kg")









