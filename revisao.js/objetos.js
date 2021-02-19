// Objetos são estruturas que permitem armazenar diversos valores
// em uma mesma variável, permitindo-se acessá-los por meio de um nome

// criação de um objeto vazio
let vazio1 = {} // forma moderna
let vazio2 = new Object() // forma tradicional

// Criando um objeto
let pessoa = {
    nome: 'Jebarson Freitas',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    gostos: ['jogos', 'doces', 'dormir'],
    // o nome da propriedade pode ter espaços ou acento
    'cidade de origem': "Franca/SP"
}

console.log(pessoa)
console.table(pessoa)

// exibindo o valor de uma propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// quando o nome da propriedade tem espaços, não é possível usar
// a sintaxe de pontinho. Temos que usar os colchetes.
console.log(pessoa['cidade de origem'])
console.log(pessoa['gostos'][1]) // mostra só o segundo gosto

let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// criando uma nova propriedade já existente
// basta atribuir um valor a um nome de propriedade ainda não existente
pessoa.email = 'blink_182@hotmail.com'
pessoa.celular = '(16) 98765-2415'
console.table(pessoa)

// criando um objeto vazio e só depois adicionando propriedades

let carro = {}
carro.marca = 'Volks'
carro.modelo = 'Fusca'
carro.ano = 1969
carro.conbustivel = 'gasolina'
carro.cor = 'bege'

// excluindo propriedade de objeto
delete carro.ano

console.table(carro)