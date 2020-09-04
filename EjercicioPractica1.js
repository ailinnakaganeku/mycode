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

