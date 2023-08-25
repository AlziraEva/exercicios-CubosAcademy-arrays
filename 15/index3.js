const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

let indice = 0
while (indice < original.length) {
    if (original[indice] % 2 === 0) {
        pares.push(original[indice])
    } else {
        impares.push(original[indice])
    }
    indice++
}
console.log(pares)
console.log(impares)