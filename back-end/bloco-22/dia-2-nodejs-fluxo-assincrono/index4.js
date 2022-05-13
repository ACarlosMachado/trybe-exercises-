// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const fs = require('fs').promises

async function CreateNewSimpsons() {
    const data = await fs.readFile('./simpsons.json');
    const result = JSON.parse(data);
    const filterSimpsons = result.filter(e => e.id <= 4 );
    const backToJson = JSON.stringify(filterSimpsons);
    fs.writeFile('./simpsonFamily.json', backToJson)
}

CreateNewSimpsons();