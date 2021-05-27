let sencence = "Please find it please find";

let arr = sencence.toLowerCase().split(" ");
var words = new Map();

for (let i = 0; i < arr.length; i++) {
    if (words.has(arr[i])) {
        let val = words.get(arr[i]); // get current count
        words.set(arr[i], val + 1)
    }
    else {
        words.set(arr[i], 1)
    }
}

console.log(...words.entries());