function gerarNumerosEntre(min, max) {
    if(min > max) [max, min] = [min, max]                               // fazendo a inversão das variáveis (caso o usuário passe o min maior que o max)
    return new Promise(resolve => {                                     // retorna uma promise
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
     })
}

gerarNumerosEntre(1, 60)                                                // chamadas em cadeias
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)