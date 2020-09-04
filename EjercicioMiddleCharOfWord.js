//You are going to be given a word.Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//#Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A".

function getMiddle(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

function getMiddle(s) {
    return s.length % 2 == 0 ? s.charAt((s.length - 1) / 2) + s.charAt((s.length + 1) / 2) : s.charAt(s.length / 2);
}

function getMiddle(s) {
    const middle = s.length / 2
    const residue = (s.length + 1) % 2
    return s.substring(middle - residue, middle + 1)
}

// function getMiddle(s) {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// function getMiddle(s) {
//     return s.length % 2 == 0 ? s.charAt((s.length - 1) / 2) + s.charAt((s.length + 1) / 2) : s.charAt(s.length / 2);
// }
