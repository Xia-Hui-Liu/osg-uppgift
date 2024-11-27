const { findAdjacentNumbers } = require('./gearRatio01');

const sumAllGearRatio = (input) => {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (input[i][j] !== '*') {
                continue;
            }
            const adjacentNumbers = findAdjacentNumbers(input, i, j);

            if (adjacentNumbers.length === 2) {
                const [nb1, nb2] = adjacentNumbers;
                total += +nb1 * +nb2;
            }
        }
    };
    return total;
};

module.exports = { sumAllGearRatio };
