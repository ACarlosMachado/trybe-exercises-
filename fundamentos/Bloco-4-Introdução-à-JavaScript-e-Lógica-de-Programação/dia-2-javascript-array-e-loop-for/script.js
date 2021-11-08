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
//Resolução:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var soma = 0;
for(let i = 1; i < numbers.length; i+=1){
    soma+=numbers[i]
}
var media = (soma/numbers.length);
console.log(media);






