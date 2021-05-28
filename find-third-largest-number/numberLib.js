const findNumber = (items) => {

    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (items[i] < items[j]) {
                // Swap element
                [items[i], items[j]] = [items[j], items[i]]
            }
        }
    }

    return items[2]; // Returns the 3rd element
}

module.exports = { findNumber }