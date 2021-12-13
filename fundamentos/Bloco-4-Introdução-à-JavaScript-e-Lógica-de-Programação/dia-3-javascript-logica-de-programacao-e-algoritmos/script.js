// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let num = 10;
let fatNum = 1;
for (let i = num; i>=1;i=i-1) {
    fatNum  = fatNum * i
}
console.log(`O fatorial de ${num} é igual a: ${fatNum}`);

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'Carlos';
let newWord = " ";
for(let i = word.length-1; i>=0; i=i-1){
    newWord=newWord+word[i]
}
console.log(newWord)

// 3- Considere o array de strings abaixo:

 let array = ['java', 'javascript', 'python', 'html', 'css', 'paralelepipedo'];
 let maior = array[0]
 let menor = array[0]
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


for(let i = 0; i < array.length; i+=1){
    if(array[i].length > maior.length){
        maior = array[i]
    }
}console.log("A maior palavra é: " + maior)

for(let i = 0; i < array.length; i+=1){
    if(array[i].length < menor.length){
        menor = array[i]
    }
}console.log("A menor palavra é: " + menor)


// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numeros = []


for (let i = 1; i<=10; i+=1){
    numeros.push(i)
}
let primos = []
for (let i=0; i<numeros.length; i+=1){
    for (let div = 2; div < numeros[i]; div+=1){
        if(numeros[i] % div === 0){
            break
        }else{
            primos.push(numeros[i])
        }
    }
}console.log(primos)

// BÔNUS
//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let symbol = '*';
let vazio = ' ';
let n = 5;
for(let i=0; i<n;i+=1){ // O primeiro for imprime a linha com n asteriscos
    vazio+=symbol
}
for (let j = 0; j < n; j+=1){ // O segundo for repete a linha n vezes.
    console.log(vazio)
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let symbol2 = '*';
let vazio2 = ' ';
let n2 = 5;
for(let i=0; i<n2;i+=1){ // Imprime i asteriscos por linha;
    vazio2+=symbol2
    console.log(vazio2)
}

// Exercício 3
// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****


let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};


