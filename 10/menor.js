
const precos = [10, 20, 30, 40]

let menorNumero = precos[0]
let soma = 0
for (let produto of precos) {
    if (produto < menorNumero)
        menorNumero = produto
}

for (let produto of precos) {
    if (precos.length <= 5) {
        soma += produto
    }
    else {
        soma += produto
    }
}
if (precos.length <= 5) {
    console.log(soma - menorNumero)
} else {
    console.log(soma)
}




