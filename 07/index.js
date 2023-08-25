const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let letras = []

for (item of nomes) {
    if (item[0] === "a" || item[0] === "A")
        letras.push(item)
}
console.log(letras)