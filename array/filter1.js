// Filtrar um array (o array nunca pode ser maior; ou é do mesmo tamanho ou menor)
// É um função callback que retorna verdadeiro ou falso 

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPad Pro', preco: 4199, fragil: true },
    {nome: 'Copo de vidro', preco: 12.49, fragil: true },
    {nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false                                // array vazia
}))

// Criar duas listas filtrando os produtos caros e frágeis

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))