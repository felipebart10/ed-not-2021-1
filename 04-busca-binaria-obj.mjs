let comps

function buscaBinaria(vetor, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length - 1
    let meio
    while(fim >= ini) {
        meio = Math.floor((fim + ini) / 2) //Math.floor() arredonda pra baixo
        switch(fnComp(vetor[meio])) {
            case 0: //achou
                comps++
                return meio
                break
            case 1: // valor de busca é maior
                comps += 2
                ini = meio + 1
                break
            default: // valor de busca é menor
                comps += 2
                fim = meio - 1
        }
        /*if(vetor[meio] === valorBusca) {
            comps++
            return meio //Achou
        }
        else if(valorBusca > vetor[meio]) {
            comps += 2
            ini = meio + 1
        }
        else {
            comps += 2
            fim = meio - 1
        }
    }
    return -1 //não existe */
    }
}
import {objNomes} from './includes/vetor-obj-nomes.mjs'

console.log('--------------------------')

// A função de comparação para a busca binária precisa retornar um de três valores:
// retorno 0: o valor de busca e o valor no objeto são iguais
// retorno -1: o valor de busca é menor que o valor no objeto
// retono 1:  o valor de busca é maior que o valor no objeto
const comparaNome = (obj, busca = 'FAUSTO') => {
    if (busca === obj.first_name) return 0
    else if (busca < obj.first_name) return -1
}
console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes, (obj, busca = 'LAMARA') => {
if(busca === obj.first_name) return 0
else if(busca < obj.first_name) return -1
else return 1
}), {comps})
console.timeEnd('Buscando LAMARA')

console.time('Buscando SAMARA')
console.log(buscaBinaria(objNomes, (obj, busca = 'SAMARA') => {
if(busca === obj.first_name) return 0
else if(busca < obj.first_name) return -1
else return 1
}), {comps})
console.timeEnd('Buscando SAMARA')

console.time('Buscando TIRSO')
console.log(buscaBinaria(objNomes, (obj, busca = 'TIRSO') => {
if(busca === obj.first_name) return 0
else if(busca < obj.first_name) return -1
else return 1
}), {comps})
console.timeEnd('Buscando TIRSO')