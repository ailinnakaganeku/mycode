//Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
//If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

//For example:

//"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
//"a"             --> "invalid string" 

function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" :
        [...string].filter((x, i) => i % 2);
}
function evenChars(string) {
    if (2 > string.length || string.length > 100) return 'invalid string';
    return string.split('').filter(function (item, index) {
        return index % 2 != 0;
    });
}
const evenChars = xs => xs.length < 2 || xs.length > 100 ? 'invalid string' : xs.split('').filter((x, i) => i % 2)
