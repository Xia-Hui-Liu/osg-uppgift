const inputData = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..',
  ];
  
  const matrix = inputData.map(line => line.split(''));
 
  const isSymbol = char => char !== '.' && isNaN(parseInt(char));
  const isDigit = char => /\d/.test(char);
  
  const getFullNumber = (row, col, input) => {
      let numStr = '';
      let start = col;
  
      while (start > 0 && isDigit(input[row][start - 1])) start--;
  
      while (start < input[row].length && isDigit(matrix[row][start])) {
          numStr += input[row][start];
          input[row][start] = '.';
          start++;
      }
      console.log(numStr)
    //   return parseInt(numStr);
  };
  console.log(getFullNumber(matrix));
  
  const hasAdjacentSymbol = (row, col, matrix) => {
      const rowLimit = matrix.length - 1;
      const colLimit = matrix[0].length - 1;
  
      for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, rowLimit); i++) {
          for (let j = Math.max(0, col - 1); j <= Math.min(col + 1, colLimit); j++) {
              if (i !== row || j !== col) {
                  if (isSymbol(matrix[i][j])) return true;
              }
          }
      }
      return false;
  };
  
  const sumPartNumbers = (matrix) => {
      let total = 0;

      for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[row].length; col++) {
              if (isDigit(matrix[row][col]) && hasAdjacentSymbol(row, col, matrix)) {
                  total += getFullNumber(row, col, matrix);
              }
          }
      }
      console.log(total);
  };
   