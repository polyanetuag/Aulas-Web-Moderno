// Usar uma promise para chamar um arquivo/ Encapsular um readFile dentro de uma Promise

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {                        // primeiro parâmetro é o erro; o segundo é o conteúdo
            resolve(conteudo.toString())                                    // converter para string
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split(' \n '))
    .then(linhas => linhas.join(','))                                       // separar por virgulas
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)