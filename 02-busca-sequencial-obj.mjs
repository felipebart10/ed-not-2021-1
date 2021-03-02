function buscaSequencial(vetor, fnComp) {
    for(let i = 0; i<vetor.length; i++) {
        if(fnComp(vetor[i])) return i // Retorna a posição onde foi encontrado
    }
    return -1
}

/*function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}*/

//const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
//const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, (obj, busca) => obj.first_name === 'FAUSTO'))
console.log(buscaSequencial(objNomes, (obj, busca) => obj.group_name === 'MARIA'))


// primeio nome que tenha mais de 1000 ocorrências
let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'M')
console.log(objNomes[pos])

console.time('Buscando LAMARA')
pos = buscaSequencial(objNomes, obj => obj.first_name === "LAMARA")
console.log(objNomes[pos])
console.timeEnd('Buscando LAMARA')