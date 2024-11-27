const extractLetterAndSum = (input) => {
  const numbersMapping = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
  };

  let total = 0;

  input.forEach(line => {
      const matches = [];

       for (let i = 0; i < line.length; i++) {
          if (+line[i] == line[i]) {
              matches.push(line[i]);
              continue;
          }

        for (let j = 1; j <= 5; j++) { // Loops through possible lengths of words (1 to 5 characters).
          const word = line.slice(i, i + j);//Extracts a substring of length j starting from the current position i
          
          if (numbersMapping[word]) {
              matches.push(numbersMapping[word]);
              break;
          }
        }
      }
      total += +(matches[0] + matches[matches.length -1]);
  })

  return total;
};

module.exports = extractLetterAndSum; 