
// Directions for adjacency (horizontal, vertical, diagonal)
const adjacentSpots = [
    [-1, 0], [1, 0], [0, -1], [0, 1],  // Up, Down, Left, Right
    [-1, -1], [-1, 1], [1, -1], [1, 1] // Diagonals
];

// Function to check if a cell is adjacent to any symbol
const findAdjacentSymbol = (input, i, j) => {
    for (const [x, y] of adjacentSpots) {
        const value = input[i + y]?.[j + x];
        if (value !== undefined && value !== '.' && !Number.isInteger(+value)) {
            return true;
        }
    }
    return false;
}

// Function to extract a full number from a cell
const findFullNumber = (input, i, j) => {
    let nb = input[i][j];

    // Check left
    for (let k = j - 1; k >= 0; k--) {
        if (Number.isInteger(+input[i][k])) {
            nb = `${input[i][k]}${nb}`;
        } else {
            break;
        }
    }

    // Check right
    for (let k = j + 1; k < input[0].length; k++) {
        if (Number.isInteger(+input[i][k])) {
            nb += input[i][k];
        } else {
            break;
        }
    }

    return nb;
}

// Find adjacent numbers around the current cell
const findAdjacentNumbers = (input, i, j) => {
    const adjacentNumbers = new Set();
    for (const [x, y] of adjacentSpots) {
        const value = input[i + y]?.[j + x];
        if (Number.isInteger(+value)) {
            adjacentNumbers.add(findFullNumber(input, i + y, j + x));
        }
    }
    return Array.from(adjacentNumbers);
}

const sumPartNumbers = (input) => {
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let currentNb = '';
        let adjacent = false;

        for (let j = 0; j < input[0].length + 1; j++) {
            if (!Number.isInteger(+input[i][j])) {
                if (adjacent) {
                    total += +currentNb;
                }

                currentNb = '';
                adjacent = false;
                continue;
            }

            currentNb += input[i][j];

            if (findAdjacentSymbol(input, i, j)) {
                adjacent = true;
            }
        }
    }

    return total;
};

module.exports = { sumPartNumbers, findAdjacentNumbers};


