const fs = require('fs').promises;
const sumGameIds = require('./cubeConundrum01');
const sumPower = require('./cubeConundrum02');

const main = async() => {
    try {
        const inputData = await fs.readFile('../data/day2-input.txt', 'utf8');
        const result = sumGameIds(inputData);
        console.log(`The sum of the IDs of possible games is: ${result}`);
        const power = sumPower(inputData);
        console.log(`the sum of the power is: ${power}`);
    } catch (error) {
        console.error('Error reading the file:', error);
    }
}


main();