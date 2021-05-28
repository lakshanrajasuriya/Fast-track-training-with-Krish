const findNumber = (sequence) => {

    var total_1 = 0; // For the total of sequence
    var max = sequence[0]; // For maximum value
    var length = sequence.length; // For the length of sequence

    // Count the total of the sequence
    sequence.forEach((item) => {

        if (item > max)
            max = item;

        total_1 += item;
    });

    var min = max - length; // For the minimum value
    var count = min;
    var total2 = 0 // For expected total

    // Count expected total
    while (count <= max) {
        total2 += count;
        count++;
    }

    return total2 - total_1; /* Difference between expected total and the actual total is the missing value */
}

module.exports = { findNumber }