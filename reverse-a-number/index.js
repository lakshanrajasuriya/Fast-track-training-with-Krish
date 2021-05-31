let number = 5234;
let newNumber = 0;
let tempValue = 0;

console.log("Original Value: ", number);

if (number > 10) {
    while (number > 0) {
        newNumber = (newNumber * 10) + (number % 10);
        number = Math.floor(number / 10);
    }

} else {
    newNumber = number;
}

console.log("Reversed Value: ", newNumber)