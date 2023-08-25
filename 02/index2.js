const letras = ["A", "a", "B", "e", "E", "C"];

soma = 0

for (item of letras) {
    if (item === "e" || item === "E") {
        soma++
    }
}

let unidade = soma > 1 ? "letras" : "letra"

if (soma > 0) {
    console.log(`Foram encontradas ${soma} ${unidade} "E" ou "e".`)
}
else {
    console.log(`Não foram encontradas letras "E" ou "e"`)
}
