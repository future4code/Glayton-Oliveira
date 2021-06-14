// (1) - 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
//primeiro será impresso o resultado "10" e logo depois vai vir "10 5"

// 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
//vai aparecer 10 20 

/* 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase.
Alem disso, os nomes não podem começar com números ou caracteres especiais.
let horasTrabalhadas = prompt ("Quantas horas você trabalha por dia?");
let valorDaDiaria = prompt ("Quanto você recebe no dia?");
alert('você recebe ${valorDaDiaria/horasTrabalhadas} por hora')*/

// (2) 1 - Declare uma variável para armazenar um nome, sem atribuir um valor.
    /*const nome = ""
    const idade = ""
    console.log(typeof nome, typeof idade)*/
// o programa me retornou duas string, isso quer dizer que as duas variais são do tipo string,
// apesar da minha variavel idade ser do tipo numero. isso ocorre porque eu não declarei no escopo que a minha variavel só é aceita do tipo numero

const nome = prompt ("qual é o seu nome?");
const idade = prompt ("qual sua idade?");
// notei que eu digitei e não imprimiu o valor digitado da minha variavel, faltou o console.log
console.log(nome);
console.log(idade);
//agora com o console.log eu consigo visualizar pelo console as respostas da minha variavel
console.log("olá,",(nome),"você tem", (idade),"anos");

//Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
//Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
//a) Crie três novas variáveis, contendo as respostas
//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

let roupa = prompt("você está usando roupa azul hoje?");
console.log(roupa);
let bebeuAgua = prompt("você parou pra beber água hoje?");
console.log(bebeuAgua);
let estudando = prompt("você está estudando agora?");
console.log(estudando);

//Suponha que temos duas variáveis a e b, cada uma com um valor inicial

let a = 10;
let b = 25;
let c = a;

a = b;
b = c;


console.log("O novo valor de A é", a);
console.log("O novo valor de B é", b);

/*pensei assim tmb
let n1 = prompt("digite o valor A para que seja invertido para B");
let n2 = prompt("digite o valor B paraque seja invertido para A ");
console.log("o novo valor de A é ",n2)
console.log("o novo valor de B é ",n1)
forçando que o usuario digite um valor, a partir daqui fica dificil ter erro, pois só terá inversão de valores.*/

// DESAFIO
//Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
//O primeiro número somado ao segundo número resulta em: x
//O primeiro número multiplicado pelo segundo número resulta em: y

let numero1 = Number(prompt("digite o primeiro numero"));
let numero2 = Number(prompt("digite o segundo numero"));

let x = (numero1) + (numero2);
let y = (numero1) * (numero2);

console.log("resultado da soma é",x);
console.log("resultado da multiplicação é",y);
