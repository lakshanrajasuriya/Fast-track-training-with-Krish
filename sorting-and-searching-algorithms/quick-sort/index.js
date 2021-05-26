const { quickSort } = require('./quickSort')

let arr = [90, 23, 101, 45, 65, 28, 67, 89, 34, 29];
console.log("Unsorted array: ", arr)

let sortedArr = quickSort(arr, 0, 9);
console.log("The sorted array: ", sortedArr);


