let frutas = ['maçã', 'laranja', 'pêra', 'uva', 'mamão', 'banana']

// Vetor original
console.log(frutas)

let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

// Removendo primeiro elemento
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção de posição intermediária
let terceiraFruta = frutas.splice(2,1)
console.log(frutas)
console.log(terceiraFruta)