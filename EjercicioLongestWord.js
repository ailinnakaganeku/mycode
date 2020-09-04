//Find the Longest Word in a String with Math.max?

function findLongestWordLength(str) {
    let result = [str.split(' ')];
    let x = result.map(function () {
        return Math.max(result.length);
    });
    return (x);
}
//console.log(result);
//console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//findLongestWordLength("The quick brown fox jumped over the lazy dog");