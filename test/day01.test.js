const extractAndSumNumbers = require('../day01/trebuchet01'); 

test('calculates the sum of two-digit numbers formed by the first and last digits of each line', () => {
  const lines = [
    'a1b2',  
    'c3d4',  
    'e5f6'   
  ];

  expect(extractAndSumNumbers(lines)).toBe(12 + 34 + 56); 
});

test('returns 0 when no valid lines are present', () => {
  const lines = [
    'abc',    
    'xyz',    
    '!@#$%'   
  ];

  expect(extractAndSumNumbers(lines)).toBe(0); 
});

test('ignores lines without digits at both ends', () => {
  const lines = [
    'ab12cd34', 
    'xy56z'     
  ];

  expect(extractAndSumNumbers(lines)).toBe(14 + 56); // Expected sum: 70
});

test('when there is only one digit in the line', () => {
  const lines = [
    'ab12cd34', 
    'xy56z' ,
    '7yux'    
  ];

  expect(extractAndSumNumbers(lines)).toBe(14 + 56 + 77); 
});