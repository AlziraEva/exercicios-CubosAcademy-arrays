numeros = [2, 3, 4, 2, 6, 7, 8, 9]

let maiorNumero = []
let menorNumero = numeros[0]
for (item of numeros) {
    if (item > maiorNumero) {
        maiorNumero = item
    } else if (item < menorNumero) {
        menorNumero = item
    }
}
console.log(maiorNumero - menorNumero)
