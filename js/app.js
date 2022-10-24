function promedio() {
    let imprimir = document.getElementById('promedio');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let arrPromedio = array.reduce((a, b) => a + b, 0) / array.length;
    imprimir.innerHTML = arrPromedio;
}

function pares() {
    let imprimir = document.getElementById('pares');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let arrPares = array.filter((num) => num % 2 === 0);
    imprimir.innerHTML = arrPares;
}

function descendente() {
    let imprimir = document.getElementById('descendente');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let arrayDesc = array.sort((a,b)=>b-a)
    imprimir.innerHTML = arrayDesc;
}