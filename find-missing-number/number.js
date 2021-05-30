const findNumber = (sequence) => {

    let total_1 = 0; // For the total of sequence
    let max = sequence[0]; // For maximum value
    const length = sequence.length; // For the length of sequence

    // To get the actual total of the sequence
    sequence.forEach((item) => {

        if (item > max)
            max = item;

        total_1 += item;
    });

    const min = max - length; // For the minimum value
    let count = min;
    let total_2 = 0 // For expected total

    // To get the expected  total
    while (count <= max) {
        total_2 += count;
        count++;
    }

    return total_2 - total_1; /* Difference between expected total and the actual total is the missing value */
}

module.exports = { findNumber }