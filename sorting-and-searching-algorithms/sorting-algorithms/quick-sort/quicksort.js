
function quickSort(items) {
    let left = [];
    let right = [];

    if (items.length <= 1) return items;

    let pivot = items.pop();

    items.forEach((item) => {
        if (item < pivot)
            left.push(item);
        else
            right.push(item);
    })

    return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = { quickSort }