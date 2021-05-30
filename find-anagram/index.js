const { isAnagram } = require('./anagram')

const text1 = 'heart';
const text2 = 'earth';

const result = isAnagram(text1, text2) ? "Second word is an Anagram" : "Second word is not an Anagram!";
console.log(result);
