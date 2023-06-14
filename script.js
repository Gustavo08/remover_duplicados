/*
    Función que recibe un array de elementos y elimina los duplicados.
*/

function removeDuplicates ( array ) {
    return array.filter( (x, i, a) => a.indexOf(x) === i);
}

let data = [5,5,5,5,3,1,9,3,5];

let response = removeDuplicates(data);
console.log("🚀 ~ file: script.js:12 ~ response:", response);
