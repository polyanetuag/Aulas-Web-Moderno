// Operação assíncrona
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)                              // só aceita um parâmetro (ou um objeto com vários atributos)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')                          // Será executada após 3s
    .then(frase => frase.concat('?!?'))                 // acessando o resultado de uma promessa 
    .then(outraFrase => console.log(outraFrase))        // encadeamentos 
    .catch(e => console.log(e))                         // Tratar os erros em uma promise