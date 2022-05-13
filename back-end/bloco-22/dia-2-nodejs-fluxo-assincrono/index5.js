// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises

async function addNewSimpsons() {
    const readFile = await fs.readFile('./simpsonFamily.json');
    const stringFile = JSON.parse(readFile);
    stringFile.push({"id":"8","name":"Nelson Muntz"})
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(stringFile));
 }

addNewSimpsons();