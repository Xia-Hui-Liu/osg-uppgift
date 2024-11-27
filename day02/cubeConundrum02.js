const findMinimumCubes = (game) => {
    let minRed = 0, minGreen = 0, minBlue = 0;
    const sets = game.split(';');
    for (const set of sets) {
        const cubes = set.trim().split(',');
        for (const cube of cubes) {
            const [count, color] = cube.trim().split(' ');
            const numCount = parseInt(count, 10);
            if (color === 'red') minRed = Math.max(minRed, numCount);
            if (color === 'green') minGreen = Math.max(minGreen, numCount);
            if (color === 'blue') minBlue = Math.max(minBlue, numCount);
        }
    }
    return { red: minRed, green: minGreen, blue: minBlue };
}

const calculatePower = (cubes) => {
    return cubes.red * cubes.green * cubes.blue;
}

const sumPower = (inputData) => {
    let totalPower = 0;

    const lines = inputData.split('\n');
    for (const line of lines) {
        const [, game] = line.split(':');
        const minCubes = findMinimumCubes(game);
        totalPower += calculatePower(minCubes);
    }

    return totalPower;
}

module.exports = sumPower;
