function mergeArray(leftArr, rightArr) {

    const newArr = []

    while (leftArr.length && rightArr.length) {
        newArr.push(leftArr[0] > rightArr[0] ? rightArr.shift() : leftArr.shift())
    }

    //if we still have values, let's add them at the end of `newArr`
    while (leftArr.length) {
        newArr.push(leftArr.shift())
    }
    while (rightArr.length) {
        newArr.push(rightArr.shift())
    }

    return newArr;
}


function mergeSort(items) {

    if (items.length < 2)
        return items;

    let middle = Math.floor(items.length / 2);
    let leftArr = items.slice(0, middle);
    let rightArr = items.slice(middle, items.length);

    let sortLeft = mergeSort(leftArr);
    let sortRight = mergeSort(rightArr);


    return mergeArray(sortLeft, sortRight)
}

module.exports = { mergeSort }