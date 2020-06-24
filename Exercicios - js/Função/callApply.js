function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())                     //chamada direta
console.log(produto.getPreco())             //chamada por objeto(produto)

// Usando call e apply
const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Diferenças entre ambos é a passagem de parâmetros
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))             //parâmetros dentro de uma array
console.log(getPreco.apply(global,[0.17, '$']))