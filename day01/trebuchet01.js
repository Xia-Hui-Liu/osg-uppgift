const extractAndSumNumbers = (input) => {
  let total = 0;

  input.forEach(line => {
    const digits = line.match(/\d/g);
    
    if (digits){
      if (digits.length === 1){
        total += parseInt(digits[0] + digits[0], 10);
      } else if (digits.length === 2){
        total += parseInt(digits.join(''), 10);
      } else {
        total += parseInt(digits[0] + digits[digits.length - 1], 10);
      }
    }
  });

  return total;
}


module.exports = extractAndSumNumbers; 