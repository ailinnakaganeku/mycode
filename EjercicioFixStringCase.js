// //In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    let up=s.split('').filter(x=>x.match(/[A-Z]/)).length 
    //primero lo separamos o spliteamos y filtramos y macheamos si hay caracteres en mayus.
    let down=s.split('').filter(x=>x.match(/[a-z]/)).length
    return down>=up?s.toLowerCase():s.toUpperCase();
}

function solucion (s){
let varMayus= s.split('').filter(item=>item.match(/[A-Z]/)).length
let varMinus= s.split('').filter(item=>item.match(/[a-z]/)).length
return varMinus>=varMayus? s.toLowerCase() : s.toUpperCase();
}