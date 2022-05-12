const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso em KG? ');
const altura = readline.questionFloat('Qual sua altura em metro? ');

function calulaImc(peso, altura){
    const imc = (peso/(altura ** 2)).toFixed(2);
    console.log(`Seu IMC é ${imc}`);

}

calulaImc(peso, altura);