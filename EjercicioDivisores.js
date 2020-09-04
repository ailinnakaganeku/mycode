//Encontrar los divisores de un número y devolverlos en un array. Sino devolver "es primo".

function divisors(num) {
    var arr = [];

    for (var i = 2; i < num; i++) {
        if (num % i) continue;
        arr.push(i);
    }

    return arr.length ? arr : (num + " es primo");
};
