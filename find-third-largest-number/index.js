const { findNumber } = require('./numberLib')

// Unsorted array
const items = [6, 2, 32, 1, 10, 7, 5];

// Find the third largest number
const value = findNumber(items);
console.log("Third largest element is ", value);