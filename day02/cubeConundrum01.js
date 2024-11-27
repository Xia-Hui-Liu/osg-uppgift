
const isGamePossible = (game, maxRed, maxGreen, maxBlue) => {
    const sets = game.split(';');
    // console.log(sets);
    for (const set of sets) {
        const cubes = set.trim().split(',');
     
        for (const cube of cubes) {
            const [count, color] = cube.trim().split(' ');
            const numCount = parseInt(count, 10);
            if ((color === 'red' && numCount > maxRed) ||
                (color === 'green' && numCount > maxGreen) ||
                (color === 'blue' && numCount > maxBlue)) {
                return false;
            }
        }
    }
    return true;
}

const sumGameIds = (inputData) => {
    const maxRed = 12, maxGreen = 13, maxBlue = 14;

    let total = 0;

    const lines = inputData.split('\n');

    for (const line of lines) {
        const [gameIdPart, game] = line.split(':');
        const gameId = parseInt(gameIdPart.split(' ')[1], 10);

        if (isGamePossible(game, maxRed, maxGreen, maxBlue)) {
            total += gameId;
        }
    }
    return total;
};

module.exports = sumGameIds; 


