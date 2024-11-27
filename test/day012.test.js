const extractLetterAndSum = require('../day01/trebuchet02'); 

// Test when no valid numbers are present in the lines
test('returns 0 when no valid numbers are present in the lines', () => {
  const lines = [
    'abc',    
    'xyz',     
    '!@#$%'    
  ];

  expect(extractLetterAndSum(lines)).toBe(0); 
});

// Test when there is only one number in the line
test('extracts and sums numbers when there is only one valid number in the line', () => {
  const lines = [
    '4nineeightseven2', 
    'twoyux'            
  ];

  expect(extractLetterAndSum(lines)).toBe(42 + 22); 
});


// Test with mixed lines (valid and invalid numbers)
test('correctly handles lines with mixed valid and invalid numbers', () => {
  const lines = [
    'abc12def',     
    'xyz',          
    'hello34world', 
    '!@#$%'         
  ];

  expect(extractLetterAndSum(lines)).toBe(12 + 34);  // Expected sum: 46
});

