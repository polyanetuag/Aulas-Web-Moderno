// criando um produto a partir da passagem de parâmetros e personalizando o objeto de resposta 

function criarProduto(nome, preco) {
    return {
        nome,                       // como já foi definido como parametro, pode colocar só a vírgula
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
