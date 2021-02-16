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

// Inserindo elementos no fim do vetor
frutas.push('amora') // pode-se inserir mais de um elemento ao mesmo tempo
console.log(frutas)

// Inserindo no começo do vetor
frutas.unshift('Kiwi')
console.log(frutas)

// Inserindo no meio do vetor
frutas.splice(1, 0, 'pitaya') // (posição, elementos a excluir, elementos)
console.log(frutas)

// Substituindo com splice
frutas.splice(4,1,'toranja')
console.log(frutas)

// formatando como tabela
console.table(frutas)

// ------------PERCURSOS DE VETOR ----------------- //

// FOR TRADICIONAL
// A contagem começa em 0
// Ocorre enquanto o contador for menor que o tamanho do vetor
console.log('----------------------')
for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

// FOR TRADICIONAL REVERSO
console.log('----------------------')
for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(i, frutas[i])
}

// PERCURSO FOR... OF
// Foi usado 'f' mas pode ser qualquer outra variável
// Só é possível percorrer em um sentido e de 1 em 1.
console.log('----------------------')
for (let f of frutas) {
    console.log(f)
}


// método forEach (bem estranho)
frutas.forEach(function(elemento) {
    console.log(elemento)
})

console.log('----------------------')
// forEach com arrow function
frutas.forEach(elemento => console.log(elemento))