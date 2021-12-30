const sum = require('./sum');


// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
//    1- Teste se o retorno de sum(4, 5) é 9
//    2- Teste se o retorno de sum(0, 0) é 0
//    3- Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//    4- Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe ('Testando a function sum', () =>{
    it('Recebe 4 e 5 e retorna 9', ()=>{
        expect(sum(4,5)).toBe(9)
    });
    it('Recebe 0 e 0 e retorna 0', ()=>{
        expect(sum(0,0)).toBe(0)
    });
    it('Erro por receber uma string', ()=>{
        expect(() => sum(4, '5')).toThrowError();
    });
    it('Verifica se a mensagem de erro ao receber uma sting é "parameters must be numbers"', ()=>{
        expect(() => sum(4,'5')).toThrowError('parameters must be numbers')
    });
});