// 1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

var a = 2;
var b = 3;

var soma = (a + b);
    console.log(soma);
var subtracao = (a - b);
    console.log(subtracao);
var multiplicacao = (a * b);
    console.log(multiplicacao);
var divisao = (a / b);
    console.log(divisao);
var modulo = (a % b);
    console.log(modulo);

// 2) Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

var c = 5;
var d = 14;

if (c > d){
    console.log(c);
}else{
    console.log(d);
}

// 3)Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let e = 10;
let f = 15;
let g = 20;

if ( e > f && e > g ){
    console.log(e);
}else if ( f > e && f > g){
    console.log(f);
}else{
    console.log(g);
}

// 4)Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let h = 15;

if (h > 0){
    console.log("positive");
}else if ( h < 0){
    console.log("negative");
}else{
    console.log("zero");
}

// 5)Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 45;
let angulo2 = -45;
let angulo3 = 90;
let somaAngulo = angulo1 + angulo2  + angulo3

if (somaAngulo === 180){
    console.log("true");
}else if (somaAngulo !== 180 && (angulo1 > 0 && angulo2 > 0 && angulo3 > 0)){
    console.log("false");
}else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("Erro!")
}

// 6)Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let piece = "REi"
let pieceLowCase = piece.toLocaleLowerCase();

switch (pieceLowCase){
    case "rei":
        console.log("Rei: Uma casa em qualquer direção");
        break;
    case "Dama":
        console.log("Dama: Quantas casas quiser, em qualquer direção.");
        break;
    case "torre":
        console.log("Torre: Horizontal e vertical, quantas casas quiser.");
        break;
    case "bispo":
        console.log("Bispo: Diagonal, quantas casas quiser, desde que da mesma cor do inicio do jogo.");
        break;
    case "cavalo":
        console.log("Cavalo: Duas casa em uma direção + uma casa em 90º.");
        break;
    case "peão":
        console.log("Peão: Um movimento a frente.");
        break;
    default:
        console.log("Peça invalida: erro!")
}

// 7) Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let porcentagem = 45;

if (porcentagem >= 90) {
    console.log("A");
}else if (porcentagem >= 80){
    console.log("B");
}else if (porcentagem >= 70){
    console.log("C");
}else if (porcentagem >= 60){
    console.log("D");
}else if (porcentagem >= 50){
    console.log("E");
}else if (porcentagem < 50){
    console.log("F");
}else if (porcentagem <0 || porcentagem > 100){
    console.log("Erro!!!");
}

// 8) Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const isPar1 = 20;
const isPar2 = 15;
const isPar3 = 11;

if (isPar1 % 2 === 0 || isPar2 % 2 === 0 || isPar3 % 2 === 0 ){
    console.log("True");
}else{
    console.log("false")
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const isImpar1 = 3;
const isImpar2 = 4;
const isImpar3 = 6;

if (isImpar1 % 2 != 0 || isImpar2 % 2 != 0 || isImpar3 % 2 != 0 ){
    console.log("true");
}else{
    console.log("false");
}

// 10) Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custo = 10;
const venda = 20;
 
if (custo >= 0 && venda >=0){
    const custoTotal = custo * 1.2;
    const lucroTotal = (venda - custoTotal) * 1000;
    console.log(lucroTotal) 
}else{
    console.log("Erro: os valores precisam ser maiores que zero.");
}

// 11) Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

var salario = 3000;

if (salario <= 1556.94){
    descontoINSS = salario * 0.08;
}else if(salario >= 1556.95 && salario <=2594.92){
    descontoINSS = salario * 0.09;
}else if(salario >= 2594.93 && salario <=5189.82){
    descontoINSS = salario * 0.11;
}else {
    descontoINSS = salario - 570.88
}
var salarioINSS = salario - descontoINSS;

if (salario <1903.98){
    ir = 0;
}else if ( salario >= 1903.99 && salario <= 2826.65){
    ir = (salario * 0.075) - 142.80;
}else if ( salario >= 2826.66 && salario <= 3751.05){
    ir = (salario * 0.15) - 354.80;
}else if ( salario >= 3751.06 && salario <= 4664.68){
    ir = (salario * 0.225) - 636.13;
}else{
    ir = (salario * 0.275) - 869.36;
}

var salarioLiquido = salarioINSS - ir;
console.log(salarioLiquido);