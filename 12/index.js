const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Maria", "Eva", "Roberta"];

for (item of filaDeDentro) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora.shift(filaDeFora))
    }
}
console.log(filaDeDentro)
console.log(filaDeFora)
