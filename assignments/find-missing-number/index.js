// unsorted sequence
var sequence = [6, 2, 9, 7, 5, 1, 3, 8];

var total_1 = 0;
var max = sequence[0];
var length = sequence.length;

// get total of the sequence
sequence.forEach((item) => {
    if (item > max)
        max = item;

    total_1 += item;
});

var min = max - length;
var count = min;
var total2 = 0

// count expected total
while (count <= max) {
    total2 += count;
    count++;
}

console.log('Missing number is: ', total2 - total_1)


