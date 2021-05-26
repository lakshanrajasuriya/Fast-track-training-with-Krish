const { mergeSort } = require('./mergeSort')

const arr = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("unsorted array: ", arr)

console.log(arr.length)
console.log(arr.length - 1)
let sortedArr = mergeSort(arr);
console.log(sortedArr);