const { selectionSort } = require('./selectionsort')


let arr = [90, 23, 101, 45, 65, 28, 67, 89, 34, 29];
console.log("Unsorted array: ", arr)

let sortedArr = selectionSort(arr);
console.log("The sorted array: ", sortedArr);


