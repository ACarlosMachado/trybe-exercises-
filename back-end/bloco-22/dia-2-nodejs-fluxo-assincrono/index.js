const fs = require('fs').promises

const readFile = async() => {
    try{
        const result = await fs.readFile('./simpsons.json')
        const resultString = JSON.parse(result);
        resultString.forEach((e) => console.log(`${e.id} - ${e.name}`));        
    } catch (err) {
        console.log(error(`${err.message}`))
    }
}

readFile();
