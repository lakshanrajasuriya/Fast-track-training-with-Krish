const { findNumber } = require('./numberLib')

// Unsorted sequence
const sequence = [6, 2, 9, 7, 5, 1, 3, 8]; // 4 is missing

// Find missing number
const result = findNumber(sequence);
console.log('Missing number is: ', result)


