// Find int that appears an odd number of times in an array
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

//const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);

// function findOdd(A) {
//     var odd;
//     A.forEach(function (item, i, arr) {
//         if (A.filter(val => val === item).length % 2 !== 0) {
//             odd = item;
//         }
//     });
//     return odd;
// }


function findOdd(A) {
    //happy coding!

    for (let int of A) {
        let count = A.filter(num => num === int).length;
        if (count % 2 !== 0) return int;
    }
}