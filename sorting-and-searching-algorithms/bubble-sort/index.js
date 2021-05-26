const { bubbleSort } = require('./bubbleSort')

const arr = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("unsorted array: ", arr)

let sortedArr = bubbleSort(arr);
console.log(sortedArr)