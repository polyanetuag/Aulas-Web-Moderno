function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')                               // ERRO
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}


funcionarOuNao('Testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),                                // ERRO (o erro será tratado no primeiro tratamento; caso não haja, passará para o segundo tratamento
        // err => console.log(`Erro Esp.: ${err}`)            // Tratando erro específico  erro)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))       // Tratando o segundo erro
    .then(() => console.log('Fim'))