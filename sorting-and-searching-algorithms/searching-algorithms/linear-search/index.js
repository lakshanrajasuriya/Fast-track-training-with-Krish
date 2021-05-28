const { linearSearch } = require('./linearsearch')

// Unsorted array
const items = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("Unsorted Array: ", items)

const index = linearSearch(items,2); // Returns index of the item
console.log('Index of 2 is ',index)


