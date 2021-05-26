
function selectionSort(items) {

    for (let i = 0; i < items.length - 1; i++) {
        for (let j = i + 1; j < items.length; j++) {

            if (items[j] < items[i]) {
                // Swap element
                [items[i], items[j]] = [items[j], items[i]]
            }
        }
    }
    return items;
}

module.exports = { selectionSort }