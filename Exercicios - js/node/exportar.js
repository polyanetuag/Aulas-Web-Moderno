console.log(module.exports)              // objeto vazio
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null                  // Apesar de ter atribuido 'null', só quem retorna é o module.exports
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true}           // Maneira certa de exportar um novo objeto