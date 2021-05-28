const { bubbleSort } = require('./bubbleSort')

const items = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("Unsorted array: ", items)

const sortedArr = bubbleSort(items);
console.log("Sorted array: ", sortedArr)