const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
indice = 0

for (item of arrayA) {
    if (item < arrayB[indice]) {
        console.log(item)
    } else if (item > arrayB[indice]) {
        console.log(arrayB[indice])
    }
    indice++
}