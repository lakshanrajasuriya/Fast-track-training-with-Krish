const { binarySearch } = require('./binarysearch')

// Sorted array
const arr = [2, 4, 6, 7, 10, 12, 20];
console.log("Element array: ", arr)

let index = binarySearch(arr, 12); // returns index of the item
console.log('index of 12 is ', index)


