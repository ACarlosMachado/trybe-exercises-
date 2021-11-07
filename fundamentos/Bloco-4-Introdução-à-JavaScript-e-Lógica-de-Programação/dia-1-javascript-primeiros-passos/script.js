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

