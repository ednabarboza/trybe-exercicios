//Exercício 1

const a = 4;
const b = 2;

const adicao = (a + b);
console.log (adicao);

const subtracao = (a - b);
console.log (subtracao);

const multiplicacao = (a * b);
console.log (multiplicacao);

const divisao = (a / b);
console.log(divisao);

const modulo = (a % b);
console.log(modulo);

//Exercício 2

const num1 = 14;
const num2 = 7;

if (num1 > num2){
    console.log(num1 + " é maior que " + num2);
}else{
    console.log(num2 + " é maior que " + num1);
}


//Exercício 3

const n1 = 5;
const n2 = 9;
const n3 = 2;

if (n1 > n2 && n1 > n3){
    console.log(n1 + " é maior que " + n2 + " e " + n3);
}else if (n2 > n1 && n2 > n3){
    console.log(n2 + " é maior que " + n1 + " e " + n3);
}else{
    console.log(n3 + " é maior que " + n1 + " e " + n2);
}




//Exercício 4

const g = 5;

if (g>0){
    console.log("positive")
}else if (g<0){
    console.log("negative")
}else{
    console.log("zero")
}

//Exercício 5

const angulo1 = 90;
const angulo2 = 60;
const angulo3 = 30;


if (angulo1 + angulo2 + angulo3 === 180){
    console.log("true")
}else if (angulo1 <0){
    console.log("erro")
}else if(angulo2 <0){
    console.log("erro")
}else if (angulo3<0){
    console.log("erro")
}else{
    console.log("false")
}

//Tentar fazer com código menor!

//Exercício 6

let xadrez = "BISPO".toLowerCase(); //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

switch (xadrez){
    case ("torre"):
        console.log("frente e trás, direita e esquerda, sem pular peça");
        break;
    case ("bispo"):
        console.log("diagonal em casas da mesma cor, indo e voltando");
        break;
    case ("cavalo"):
        console.log("movimento em L, única que pula uma peça");
        break;
    case ("rainha"):
        console.log("frente ou trás, direita ou esquerda, diagonal");
        break;
    case ("rei"):
        console.log("move apenas uma casa em qualquer direção");
        break;
    case ("peao"):
        console.log("1 casa apenas para frente, primeiro lance pode avançar 1 ou 2 casas");
        break;
    default:
        console.log("Erro! Peça inválida");
        break;
}

//Exercício 7

let nota = 50;

if(nota>=90){
    console.log("A");
}else if(nota>=80){
    console.log("B");
}else if(nota>=70){
    console.log("C");
}else if(nota>=60){
    console.log("D");
}else if(nota>=50){
    console.log("E");
}else if(nota<50){
    console.log("F");
}else if(nota>0 || nota>100){
    console.log("Erro!")
}

// Ver última condicional com OU (||), não funciona!

//Exercício 8

const x = 6;
const y = 8;
const z = 10;

if(x % 2 === 0 && y % 2 === 0 && z % 2 ===0){
    console.log("true");
}else{
    console.log("false")
}

// Exercício 9

const k = 7;
const w = 9;
const j = 11;

if(k % 2 !== 0 && w % 2 !== 0 && j % 2 !== 0){
    console.log("true");
}else{
    console.log("false")
}

// Exercício 10

const custo = 10;
const custoTotal = (custo + (custo * 0.2));
const venda = 20;

if (custoTotal > 0 && venda > 0){
    console.log((venda - custoTotal) * 1000);
}else{
    console.log("Erro");
}


//Exercício 11


let salarioBruto = 3000;
/*
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88 */


if (salarioBruto <= 1556.94){
    console.log(salarioBruto - (salarioBruto * 0.08));
}else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    console.log(salarioBruto - (salarioBruto * 0.09));
}else if (salarioBruto > 2594.92 && salarioBruto <=5189.82){
    console.log(salarioBruto - (salarioBruto * 0.11));
}else if (salarioBruto >= 5189.82){
    console.log(salarioBruto - 570.88)
}


/*IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */




