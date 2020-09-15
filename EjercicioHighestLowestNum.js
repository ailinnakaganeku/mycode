//Return highest and lowest number in a string of numbers with spaces.
//highestAndLowest("1 2 3 4 5"); // return "5 1"


function highAndLow(numbers) {
    numbers = numbers.split(' ');

    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}
