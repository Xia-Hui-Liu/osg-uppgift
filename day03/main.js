const fs = require('fs').promises;
const { sumPartNumbers } = require('./gearRatio01');
const { sumAllGearRatio } = require('./gearRatio02');

const main = async() => {
    try {
        // Read the input data from the file
        const inputData = await fs.readFile('../data/day3-input.txt', 'utf8');
        
        // Convert the input data into a 2D array (grid)
        const input = inputData.trim().split('\n').map(line => line.split(''));
      
        const result1 = sumPartNumbers(input);
        const result2 = sumAllGearRatio(input);

        console.log('the sum of all of the part numbers in the engine schematic is:', result1);
        console.log('the sum of all of the gear ratios:', result2);
    } catch (error) {
        console.error('Error reading the file:', error);
    }
}

main();
