let trocas, pass, comps
import { candidatos } from './includes/candidatos-2018.mjs'

function selectionSort(vetor, fnComp) {
    trocas = 0, pass = 0, comps = 0
    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++) {
            // if(vetor[j] < vetor[menor]) menor = j
            // Na passagem para função de comparação, a ordem dos
            // objetos precisa ser invertida
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }
    // Percurso do vetor até a penúltima posição
    for(let i = 0; i <= vetor.length - 2; i++){
        pass++
        let menor = encontrarMenor(i + 1)
        if(fnComp(vetor[i], vetor[menor])) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas++
        }
        comps++
    }
    console.time('Ordenando...')
    console.log({trocas, pass, comps})
    console.timeEnd('Ordenando...')
}

selectionSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

