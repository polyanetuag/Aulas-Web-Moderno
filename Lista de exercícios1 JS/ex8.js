let pontuacao = "10 20 20 8 25 3 0 30 1"

let listaPontos = pontuacao.split(' ')
console.log(listaPontos)

pontuacaoMaxima = 0
pontuacaoMinima = 100

function jogos() {
    for(let pontuacao of listaPontos) {
        if(pontuacaoMaxima <= pontuacao) {
            pontuacaoMaxima = pontuacao
            += 1
            console.log('Quebrou o recorde')
        }
    } 
}

jogos()

//PontuacaoMaxima = 0

// Para cada pontuçao faça
//     Se pontuacaMaxima < pontucao
//         pontucaoMaxima = pontuacao
//         quebrourecorde += 1
