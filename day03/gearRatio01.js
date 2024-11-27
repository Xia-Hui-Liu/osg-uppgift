const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1],           [0, 1],
  [1, -1], [1, 0], [1, 1]
];

const isSymbol = (char) => char !== '.' && isNaN(parseInt(char));
const isDigit = (char) => /\d/.test(char);

const getFullNumber = (row, col, matrix) => {
    let numStr = '';
    let start = col;

    // Find the start of the number by moving left
    while (start >= 0 && isDigit(matrix[row][start])) {
        start--;
    }
    start++;  // Move to the first digit

    // Extract the full number moving right
    while (start < matrix[row].length && isDigit(matrix[row][start])) {
        numStr += matrix[row][start];
        start++;
    }
    return parseInt(numStr);
};

const hasAdjacentSymbol = (row, col, matrix) => {
    for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (newRow >= 0 && newRow < matrix.length && newCol >= 0 && newCol < matrix[0].length) {
            if (isSymbol(matrix[newRow][newCol])) {
                return true;
            }
        }
    }
    return false;
};

const findAdjacentNumbers = (row, col, matrix) => {
  const adjacentNumbers = new Set();

  for (const [dx, dy] of directions) {
    const newRow = row + dy;
    const newCol = col + dx;

    if (newRow >= 0 
        && newRow < matrix.length 
        && newCol >= 0 
        && newCol < matrix[0].length 
        && isDigit(matrix[newRow][newCol])) {
      adjacentNumbers.add(getFullNumber(newRow, newCol, matrix));
    }
  }

  return [...adjacentNumbers];
};


const sumPartNumbers = (matrix) => {
  let total = 0;
  const visited = new Set();

  // Iterate through each cell of the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // Check if the current cell contains a digit (number) and hasn't been visited
      if (isDigit(matrix[row][col]) && !visited.has(`${row},${col}`)) {
        // If the number is adjacent to a symbol, add its value to the total
        if (hasAdjacentSymbol(row, col, matrix)) {
          const number = getFullNumber(row, col, matrix);
          total += number;
          
          // Mark all digits of this number as visited
          let currentCol = col;
          while (currentCol < matrix[row].length && isDigit(matrix[row][currentCol])) {
            visited.add(`${row},${currentCol}`);
            currentCol++;
          }
        }
      }
    }
  }
  
  return total;
};

module.exports = { sumPartNumbers, findAdjacentNumbers };