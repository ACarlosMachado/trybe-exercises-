// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises

async function removeSimpsons() {
    const data = await fs.readFile('./simpsons.json');
    const result = JSON.parse(data);
    const filterSimpsons = result.filter(e => e.id != 10 && e.id != 6);
    const backToJson = JSON.stringify(filterSimpsons);
    fs.writeFile('./simpsons.json', backToJson)
}

removeSimpsons();