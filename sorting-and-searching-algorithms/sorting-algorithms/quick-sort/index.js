const { quickSort } = require('./quickSort')

const items = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("Unsorted array: ", items)

const sortedArr = quickSort(items, 0, 8);
console.log("Sorted array: ", sortedArr);


