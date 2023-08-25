const numeros = [54, 22, 14, 87, 284];

for (item of numeros) {
    if (item === 10) {
        let indice = numeros.indexOf(10)
        console.log(indice)
        break
    }
}
if (item != 10) {
    console.log("-1")
}




