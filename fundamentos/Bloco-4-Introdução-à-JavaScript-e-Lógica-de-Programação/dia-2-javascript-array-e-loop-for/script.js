// 1)Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i+=1) {
//     console.log(numbers[i]);
// }

// 2)Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//Resolução 2:
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//let soma = 0; //Cria uma variável soma e atribui a ela o valor 0
//for (let i = 0; i < numbers.length ; i+=1) { //Laço for, percorre todos os números do array numbers
 //   soma += numbers[i]  // soma = soma + numbers[i]

// }
 //   console.log(soma); //Retorna o resultado

// 3) Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//  A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
//Resolução 3:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// var soma = 0;
// for(let i = 1; i < numbers.length; i+=1){
//     soma+=numbers[i]
// }
// var media = (soma/numbers.length);
// console.log(media);

// 4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//Resolução 4:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// var soma = 0;
// for(let i = 1; i < numbers.length; i+=1){
//     soma+=numbers[i]
// }

// var media = (soma/numbers.length);
// console.log(media);
// if( media > 20 ){
//     console.log("Valor maior que 20");
// }else{
//     console.log("valor menor ou igual a 20");
// }

// 5) Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//Resolução 5:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var maior = numbers[0];

for (let i = 0; i <numbers.length; i+=1){
    if(maior < numbers[i]){
        maior = numbers[i];
    }
}console.log(maior)


// 6) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// 7) Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// 8)Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// 9) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .







