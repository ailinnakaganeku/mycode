function sumaTodosPrimos(array) {
    const esPrimo = (numero) => {
        //en este bucle tenemos que buscar un solo numero
        //en el cual al dividirlo por el numero que estamos analizando el resto nos de 0.
        //si el resto da 0 quiere decir que ese número es divisible por 1, por si mismo, y por otro, y deja de ser primo.
        //usamos el operador % que calcula el resto de una division. Por ejemplo 2 % 2 = 0 porque es una division exacta, pero 5 % 2 = 1, porque 5/2 = 2 + 1
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        //si el numero es 1, no es primo. Entonces si ponemos el operador != quiere decir que si 1 !== 1, la funcion retorna false, pero si 3 !== 1, da true.
        return numero != 1;
    }
    return array.filter((numero) => esPrimo(numero))
        .reduce((suma, numeroPrimo) => suma + numeroPrimo);
}
