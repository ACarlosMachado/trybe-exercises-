// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****
//Resolução 1):

// let n = 5;
// let asteriscos ='*';
// let linha = '';

//     for (let i = 0 ; i < n ; i+=1){
//         linha+=asteriscos + " ";
//     }
//     for (let i = 0; i <n ;i+=1){
//             console.log(linha);            
//     }
   
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
//    n = 5

// *
// **
// ***
// ****
// *****
//Resolução 2:

let n = 5;
let linha = '';
let asteriscos = '*'

for (let index = 0 ; index < n ; index+=1){
    linha+=asteriscos;
    for(let coluna = 0 ; coluna < index; coluna+=1 ){
    }    
    console.log(linha);
}

