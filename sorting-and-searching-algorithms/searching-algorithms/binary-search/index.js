const { binarySearch } = require('./binarysearch')

// Sorted array
const items = [2, 4, 6, 7, 10, 12, 20];
console.log("Sorted array: ", items)

const index = binarySearch(items, 12); // Returns index of the item
console.log('Index of 12 is ', index)


