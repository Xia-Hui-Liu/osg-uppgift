const extractAndSumNumbers = require('./trebuchet01'); 
const extractLetterAndSum = require('./trebuchet02'); 
const fs = require('fs').promises;

const main = async () => {
    try {
        const data = await fs.readFile('../data/day1-input.txt', 'utf8');
        
        const dataArr = data.split('\n');

        const sumNummberResult = extractAndSumNumbers(dataArr);
        console.log('Result:', sumNummberResult);

        const sumLetterResult = extractLetterAndSum(dataArr);
        console.log('Result:', sumLetterResult);
      } catch (err) {
        console.error('Error reading file:', err);
      }
}
main();