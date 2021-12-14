// Parte II - Funções
// gora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
// Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(name){
    let splitString = name.split("") // Pega a string name e transforma em um array. Ex: name = "bolo; splitString = ["b", "o","l","o"];
    let reverseArray = splitString.reverse(); //Inverte os elementos do array. Ex: ["o", "l","o","b"]
    let joinArray = reverseArray.join("") // transforma o array em uma string;
        if(joinArray === name){
            console.log("true")
        }else{
            console.log("false")
        }
}verificaPalindrome("arara")
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function maiorValor (array) {
     array = [2, 3, 6, 7, 10, 1];
    let maiorNumero = 0;
    let indice = 0;
    for(let i=0; i<array.length;i+=1){
        if(array[i]>maiorNumero){
            maiorNumero = array[i]
            indice = i
        }
    }console.log(indice)
}maiorValor()

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
function menorValor (array) {
    array = [2, 4, 6, 7, 10, 0, -3];
   let menorNumero = 0;
   let indiceMenor = 0;
   for(let i=0; i<array.length;i+=1){
       if(array[i]<menorNumero) {
           menorNumero = array[i]
           indice = i
       }
   }console.log(indice)
}menorValor()

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
function maiorNome(){
    let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    let maior = arrayTeste[0]
    for(let i = 1; i < arrayTeste.length; i+=1){
        let string = arrayTeste[i].split(""); // Pega cada elemento do array e transforma em um novo array; Ex: ['j','o','s','e']
        if(string.length > maior.length){ //Compara o tamanho do novo array com o maior;
            maior = string
        }
    } let maisCaracteres = maior.join("") //Transforma o array em string;
    console.log(maisCaracteres)
}maiorNome()

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .

// Valor esperado no retorno da função: 2 .
// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
function somatorio (n) {
    let soma = 0;
    for(let i = 0; i<=n;i+=1){
        soma+=i
    }console.log(soma)
}somatorio(5)

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
    let inverseWord = word.split('').reverse().join(''); //Inverte a string word; ex: ['e','b','y','r','t']
    let inverseEnding = ending.split('').reverse().join(''); // Inverte a string ending
    let result;
  
    for (let index = 0; index < inverseEnding.length; index += 1) {
      if (inverseWord[index] !== inverseEnding[index]) { //Verifica se a string word invertida é igual a string ending invertida;
        result = false; // Se não for, retorna falso,
        break;         // e para o lop;
      } else { 
        result = true; //Se for igual, continua o laço for;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false