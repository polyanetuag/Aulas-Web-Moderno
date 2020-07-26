const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()             // transforma em minuscula

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

    .then(primeiroElemento)             // Do array
    .then(primeiroElemento)             // Da string
    .then(letraMinuscula)
    .then(console.log)