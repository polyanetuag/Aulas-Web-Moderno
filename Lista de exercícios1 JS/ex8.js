let pontuacao = "10 20 20 8 25 3 0 30 1"

let listaPontos = pontuacao.split(' ')      // separa a string
console.log(listaPontos)

let pontuacaoMaxima = [0]
let pontuacaoMinima = [0]
let piorJogo = 1
let recordes = 0

function jogos(pontuacao) {
    for(let i =1; i < listaPontos.length; i++) {
        if(listaPontos[i] > pontuacaoMaxima) {
            pontuacaoMaxima = listaPontos[i]
            recordes++
        }else if (listaPontos[i] < pontuacaoMinima) {
            pontuacaoMinima = listaPontos[i]
            piorJogo = i+1;
        }
    } 
    return [recordes, piorJogo]
}

console.log(jogos(pontuacao))
