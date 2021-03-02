/*
BUSCA BINÁRIA
Requer um conjunto de dados ORDENADO.
Atua dividindo o vetor sucessivametne em metades aproximadas
até que o valor de busca seja localizado, ou que o ponteiro
de fim acabe antes do ponteiro de início. Essa última situação
indica que o valor de busca não existe no conjunto.
*/

function buscaBinaria(vetor, valorBusca) {
    let ini = 0
    let fim = vetor.length - 1
    let meio = Math.floor((fim + ini) / 2) //Math.floor() arredonda pra baixo
    while(fim >= ini) {
        if(vetor[meio] === valorBusca) return meio //Achou
        else if(valorBusca > vetor[meio]) ini = meio + 1
        else fim = meio - 1
    }
    return -1 //não existe
}