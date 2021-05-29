// For sorting text
const sortText = (text) => {

    let arr = text.split("")
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            // Check if ascii value is same
            if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {

                // Swap elements
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr.join("");
}

const isAnagram = (text1, text2) => {
    
    let sortedText_1 = sortText(text1.toLowerCase());
    let sortedText_2 = sortText(text2.toLowerCase());
    return sortedText_1 === sortedText_2; // Returns true if sorted texts are same
}

module.exports = { isAnagram }