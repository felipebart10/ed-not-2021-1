let totTrocas, pass, comps
import { candidatos } from './includes/candidatos-2018.mjs'

function bubbleSort(vetor, fnComp) {
    console.time('Ordenando...')
    console.log('Antes:',vetor)
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0 // Iniciando uma nova passada
        pass++
        // Percurso do vertor, da primeira até a penúltima posição
        for (let i = 0; i <= vetor.length - 2; i++) {
            if(fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocas++
            }
            comps++
        }
        totTrocas += trocas

    } while (trocas>0)
    console.log('Depois', vetor)
    console.log({totTrocas, pass, comps})
    console.timeEnd('Ordenando...')
}

bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)