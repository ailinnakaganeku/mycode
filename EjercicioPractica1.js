
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

function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
    return s.length % 2 == 0 ? s.charAt((s.length - 1) / 2) + s.charAt((s.length + 1) / 2) : s.charAt(s.length / 2);
}



//Reemplazar todas las vocales de un string.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


//Encontrar los divisores de un número y devolverlos en un array. Sino devolver "es primo".

function divisors(num) {
    var arr = [];

    for (var i = 2; i < num; i++) {
        if (num % i) continue;
        arr.push(i);
    }

    return arr.length ? arr : (num + " es primo");
};


//IN A SMALL TOWN THE POPULATION IS P0 = 1000 AT THE BEGINNING OF A YEAR. 
//THE POPULATION REGULARLY INCREASES BY 2 PERCENT PER YEAR AND MOREOVER 50 NEW INHABITANTS PER YEAR COME TO LIVE IN THE TOWN.
// HOW MANY YEARS DOES THE TOWN NEED TO SEE ITS POPULATION GREATER OR EQUAL TO P = 1200 INHABITANTS?

//At the end of the first year there will be:
//1000 + 1000 * 0.02 + 50 => 1070 inhabitants

//At the end of the 2nd year there will be:
//1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

//At the end of the 3rd year there will be:
///1141 + 1141 * 0.02 + 50 => 1213

//IT WILL NEED 3 YEARS

//More generally given parameters:
//p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass) 
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p, years = 0) {
    return p0 < p ? nbYear(p0 + p0 * percent / 100 + aug, percent, aug, p, years + 1) : years;
}

function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
    return y;
}


function nbYear(p0, percent, aug, p) {
    var counter = 0;
    while (p0 < p) {
        p0 += p0 * (percent / 100) + aug;
        counter += 1;
    }
    return counter;
}


// Find int that appears an odd number of times in an array
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}


function findOdd(A) {
    var len = A.length;
    var A_sort = A.slice().sort();

    var count = {};

    A_sort.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });
    /*  Note on the above code - creates the associative array object 'count' that will have a key-value pair for each unique element in the array, where the key is the unique element value and the value is the count. Then iterating over the array and for each value either increments the value or creates the key value pair (the value of the non-existent key evaluates to undefined so the || or operator takes a zero instead and adds the 1)*/
    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            //  var value = count[key];
            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}
//console.log(findOdd([1, 1, 9, 2]));

const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);

function findOdd(arr) {
    var result, num = 0;

    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            num++;
        } else {
            num++;
            if (num % 2 != 0) {
                result = arr[i];
                break;
            }
        }
    }
    return result;
}

function findOdd(A) {
    for (var i = 0; i < A.length; i++) {
        //Query the number of times that this 'i' element appears
        //then verify if that number of times is odd. If it is true, then return
        //that 'i' element
        if ((A.filter(function (item) { return item == A[i]; })).length % 2 != 0) {
            return A[i];
        }
    }
    return 0;
}


function findOdd(A) {
    A.sort();
    if (A[0] !== A[1]) return A[0]
    else {
        A.splice(0, 2)
    }
    return findOdd(A)
}

function findOdd(A) {
    var odd;
    A.forEach(function (item, i, arr) {
        if (A.filter(val => val === item).length % 2 !== 0) {
            odd = item;
        }
    });
    return odd;
}

function findOdd(A) {
    //happy coding!

    for (let int of A) {
        let count = A.filter(num => num === int).length;
        if (count % 2 !== 0) return int;
    }
}



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


//You are given an array(list) strarr of strings and an integer k. 
//Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//Example:
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

//n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//Note
//consecutive strings : follow one after another without an interruption

//function testing(actual, expected) {
//    Test.assertEquals(actual, expected)
//}

//Test.describe("longestConsec",function() {
//Test.it("Basic tests",function() { 

function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return "";
    } else {
        var list = [];
        for (var i = 0; i < strarr.length - k + 1; i++) {
            list[i] = strarr.slice(i, k + i).join('');
        }

        var longest = list.reduce(function (a, b) { return a.length >= b.length ? a : b; });
        return longest;
    }
}

function longestConsec(strarr, k) {
    // your code
    var string = ""
    var n = strarr.length;
    if (n === 0 || k > n || k <= 0) {
        return string;
    }
    else {
        //find out which word is the longest word
        //return "that word + (k-1)after that word:
        var lengthWord = [];
        var max = 0;
        var longest_word = ""
        for (var i = 0; i < strarr.length; i++) {
            if (strarr[i].length > max) {
                max = strarr[i].length;
                longest_word = strarr[i]
                if (i === strarr.length - 1) {
                    return longest_word;
                }
            }
            for (var j = i + 1; j <= k; j++) {
                string = longest_word.concat(strarr[j])
            }
        }    //return longest_word; //i = 1, i + (k-1)
    }
    return string;
}

// testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
// testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
// testing(longestConsec([], 3), "")
// testing(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
// testing(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
// testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
// testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
// testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
// testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
// })})


//Kevin is noticing his space run out! 
//Write a function that removes the spaces from the values and returns an array showing the space decreasing.
//For example, running this function on the array['i', 'have', 'no', 'space'] would produce['i', 'ihave', 'ihaveno', 'ihavenospace'].

function spacey(array) {
    let string = ''
    return array.map((e) => string += e)
}

function spacey(array) {
    let result = ''
    return array.map(item => result += item)

}

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


//Ordenar un arreglo de numeros:
function ordenarNumeros(array) {
    return array.sort((a, b) => a - b);
}


//Word replace

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
Test.assertEquals(duplicateEncode("din"), "(((");
Test.assertEquals(duplicateEncode("recede"), "()()()");
Test.assertEquals(duplicateEncode("Success"), ")())())", "should ignore case");
Test.assertEquals(duplicateEncode("(( @"), "))((");



//In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
//For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    // your code
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}


