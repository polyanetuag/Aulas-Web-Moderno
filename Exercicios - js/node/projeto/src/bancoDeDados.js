const sequence = {
    _id: 1,
    get id() { return this._id++ }          // retorna o próximo valor de id 
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id           // se o produto não tiver setado, ele adiciona com um id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}               // caso não encontre um id, retorna um objeto vazio
}

function getProdutos() {                    // retorna todos os valores do objeto
    return Object.values(produtos)
}

function excluirProduto(id) {                    // excluir produtos 
    const produto = produtos[id]
    delete produtos[id]
    return produto
    
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }