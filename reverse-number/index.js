let value = 5234;
let reverseValue = 0;

console.log("Original Value: ", value);

while (value > 0) {
    reverseValue = (reverseValue * 10) + (value % 10);
    value = Math.floor(value / 10);
}

console.log("Reversed Value: ", reverseValue);