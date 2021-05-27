
function findThirdLargest(items) {

    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (items[i] < items[j]) {
                [items[i], items[j]] = [items[j], items[i]]
            }
        }
    }

    return items[2]
}

let items = [6, 2, 32, 1, 10, 7, 5];

let value = findThirdLargest(items);
console.log("Third largest element: ", value);