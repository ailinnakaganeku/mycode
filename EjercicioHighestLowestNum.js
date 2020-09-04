//Return highest and lowest number in a string of numbers with spaces.
//highestAndLowest("1 2 3 4 5"); // return "5 1"


function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)

    var min = Math.min.apply(null, numbers)
    var max = Math.max.apply(null, numbers)

    return max + ' ' + min
}

function highAndLow(numbers) {
    numbers = numbers.split(' ');

    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}