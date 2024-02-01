// Let op! Werkt met Node versie 18+
const readline = require("readline/promises");
const {stdin: input, stdout: output} = require('process')

const rl = readline.createInterface({input, output});

async function startReadLine() {
    let answer = await rl.question("Hoe heet je? ");
    console.log(`Hallo ${answer}!`);

    rl.close();
}

startReadLine();
