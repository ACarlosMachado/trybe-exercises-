// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const fs = require('fs').promises

async function searchSimpsonID(id) {
    
    const data = await fs.readFile('./simpsons.json');
    const result = JSON.parse(data);
    const simpsonsID = result.find(e => e.id == id);

   if (simpsonsID != undefined ) {
       console.log(`${simpsonsID.id} - ${simpsonsID.name}`)
   } else {
       throw new Error(`id não encontrado`)
       //console.log(`id não encontrado`)
   }
    
}

searchSimpsonID(2);