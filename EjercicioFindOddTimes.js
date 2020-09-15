// Find int that appears an odd number of times in an array
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

