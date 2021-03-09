/* 
    BUBBLE SORT

    Percorre o conjunto de dados, comparando o elemento atual com o seu
    sucessor e promovendo a troca entre eles caso o primeiro seja maioreque o segundo.

    Faz isso em várias passadas até que, na última delas, nenhuma troca tenha sido registrada.
*/
let totTrocas, pass, comps
import { nomes } from './includes/100-mil-nomes.mjs'

function bubbleSort(vetor) {
    console.time('Ordenando...')
    console.log('Antes:',vetor)
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0 // Iniciando uma nova passada
        pass++

        // Percurso do vertor, da primeira até a penúltima posição
        for (let i = 0; i <= vetor.length - 2; i++) {
            if(vetor[i] > vetor[i + 1]) {
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

let nums = [7,4,9,0,6,1,8,2,5,3]
let nums2 = [9,8,7,6,5,4,3,2,1,0] //pior caso
let nums3 = [0, 1, 2, 3, 4,  5, 6, 7, 8, 9]

//bubbleSort(nums)
//bubbleSort(nums2)
//bubbleSort(nums3)

bubbleSort(nomes)