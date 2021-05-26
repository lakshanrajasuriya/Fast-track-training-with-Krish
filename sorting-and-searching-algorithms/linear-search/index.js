const { linearSearch } = require('./linearsearch')

const arr = [4, 3, 6, 2, 1, 9, 8, 7, 5];
console.log("Element array: ", arr)

let index = linearSearch(arr,5); // returns index of the item
console.log('index of 5 is ',index)


