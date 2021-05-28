const { selectionSort } = require('./selectionsort')

const items = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("Unsorted array: ", items)

const sortedArr = selectionSort(items);
console.log("Sorted array: ", sortedArr);


