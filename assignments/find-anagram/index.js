
function sortText(text) {
    let arr = text.split("")
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr.join("");
}


function checkAnagram(text1, text2) {
    let sortedText_1 = sortText(text1.toLowerCase());
    let sortedText_2 = sortText(text2.toLowerCase());
    return sortedText_1 === sortedText_2 ? "Anagram" : "Not Anagram";
}

console.log(checkAnagram('heart', 'earth'));

