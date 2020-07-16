const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de lápis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos 

const paraObjeto = json => JSON.parse(json)             // transformar a string em objeto
const apenasPreco = produto => produto.preco            // retorna somente os preços

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)