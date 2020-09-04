function palindromo(array) {
    function capicua(string) {
        //var array = string.split('')
        var contador = 0;
        //for(let i=0; i<string.length; i++){
        //  for(let j=string.length -1; j>=0; j--){
        //}
        //}
        var i = 0;
        var j = string.length - 1;
        while (i < string.length) {
            if (string[i] === string[j]) {
                contador++// cantidad de iteraciones hasta cumplir condición.
            }
            i++;
            j--;
        }
        if (contador == string.length) return true;
        return false;
    }
    newArray = array;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (capicua(array[i][j]) == true) {
                newArray[i][j] = newArray[i][j].length;
            }
            else newArray[i][j] = 'no'
        }
    }
    return newArray
}
console.log(palindromo([['neuquen', 'ailin'], ['menem', 'lucas']]))
//output: [[7,no],[5,no]]
