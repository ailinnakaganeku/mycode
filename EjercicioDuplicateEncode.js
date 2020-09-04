//Word replace

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
Test.assertEquals(duplicateEncode("din"), "(((");
Test.assertEquals(duplicateEncode("recede"), "()()()");
Test.assertEquals(duplicateEncode("Success"), ")())())", "should ignore case");
Test.assertEquals(duplicateEncode("(( @"), "))((");

