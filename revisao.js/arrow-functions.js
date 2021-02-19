function quadrado(n) {
    return n*n
}
console.log(quadrado(9))

// Transformando em arrow function
const quadrado2 = n => n*n
console.log(quadrado2(3))

function potencia(b, e) {
    return b ** e
}

console.log(potencia(2,8))
const potencia2 = (b, e) => b**e
console.log(potencia2(2,8))

function megasena() {
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena(), )

const megasena2 = () => Math.floor(Math.random() * 60 + 1)

console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

// arrow function com mais de uma linha
function somaVet(vet) {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 5, 2, 6, 25, 66]))

const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet2([12, 5, 2, 6, 25, 66]))

/* Arrow functions foram feitas para simplificar o código e 
a escrita de funções de uma linha, embora também seja possível usá-las
com funções de múltiplas linhas */