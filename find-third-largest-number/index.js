const { findNumber } = require('./number')

const items = [6, 2, 32, 1, 10, 7, 5];

const value = findNumber(items);
console.log("Third largest element is ", value);