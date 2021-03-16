/*
    MERGE SORT
    
    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.
*/
import { candidatos } from './includes/candidatos-2018.mjs'
import { nomes } from './includes/100-mil-nomes.mjs'

function mergeSort(vetor) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            if(vetEsq[pEsq] < vetDir[pDir]) {
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
        }
        // Descobrir de qual lado sobrou
        let sobra

        // Sobra a esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra a direita
        else sobra = vetDir.slice(pDir)

        // Retorna o vetor de resultados + sobra
        return [...vetRes, ...sobra]
    }
    // Para ser "desmontado", um vetor deve ter pelo menos 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)       
        //slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive - a posição final não entra)
        let vetEsq = vetor.slice(0, meio)
        // Caso o segundo parâmetro de slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)

        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à função
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        const vetFinal = mesclar(vetEsq, vetDir)
        //console.log({vetFinal})

        return vetFinal
    }
    return vetor
}

let nums = [7,4,9,0,6,1,8,2,5,3]
let numsOrd = mergeSort(nums)
console.log({numsOrd})

//console.time('Ordenando nomes...')
//let nomesOrd = mergeSort(nomes)
//console.timeEnd('Ordenando nomes...')
//console.log({nomesOrd})