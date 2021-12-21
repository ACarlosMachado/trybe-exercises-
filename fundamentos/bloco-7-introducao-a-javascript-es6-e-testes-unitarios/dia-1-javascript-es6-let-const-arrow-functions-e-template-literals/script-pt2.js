// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (num) => {
    let fat = 1;
    for (let i = num; i>=1; i-=1){
        fat = fat * i
    } return fat
} 
fatorial(3)

//2)Crie uma função que receba uma frase e retorne qual a maior palavra.
//Exemplo:       longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const maiorPalavra = frase => {
   let arrayFrase = frase.split(' ');
   
   let maiorIndex = 0
   let maior = " "

   for (const palavras of arrayFrase){
       if (palavras.length > maiorIndex){
           maiorIndex = palavras.length
           maior = palavras         
       }
   } 
   return maior
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));


