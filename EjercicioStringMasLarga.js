function stringMasLarga(str) {
    var max = "";
    var arreglo = str.split(" ");
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i].length > max.length) {
            max = arreglo[i];
        }
    }
    return max;
}