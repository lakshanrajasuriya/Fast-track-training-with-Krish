const letterCount = (sentence) => {

    // Split sentence into letters
    let charArr = sentence.replace(/ /g, '').toLowerCase().split("");
    let letters = new Map(); // To store letters with count


    for (let i = 0; i < charArr.length; i++) {
        if (letters.has(charArr[i])) {
            
            // Get available count of letter
            let count = letters.get(charArr[i]);
            
            // Store updated count
            letters.set(charArr[i], count + 1);
        }
        else {
            // Stores new letters
            letters.set(charArr[i], 1)
        }
    }
    return [...letters.entries()];
}

module.exports = { letterCount }