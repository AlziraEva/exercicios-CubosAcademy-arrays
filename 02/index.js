const letras = ["A", "a", "B", "e", "E", "C"];

let soma = 0


for (i = 0; i < letras.length; i++) {
    if (letras[i] === "e" || letras[i] === "E") {
        soma++
    }
}
let unidade = soma > 1 ? "letras" : "letra"

if (soma > 0) {
    console.log(`Foram encontradas ${soma} ${unidade} "E" ou "e".`)
}
else {
    console.log(`Não foram encontradas Letras "E" ou "e".`)
}



