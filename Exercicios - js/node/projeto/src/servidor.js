// porta significa o processo de requisição com a rede
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))               // transforma em objeto para acessar os dados 

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())            
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))            // retorna um produto específico
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({                //salvar produtos no corpo da requisição
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)       //JSON
})

app.put('/produtos/:id', (req, res, next) => {                      // editar os produtos
    const produto = bancoDeDados.salvarProduto({  
        id: req.params.id,              
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)       //JSON
})


app.delete('/produtos/:id', (req, res, next) => {                      // excluir os produtos
    const produto = bancoDeDados.excluirProduto(req.params.id)  
    res.send(produto)       //JSON
})

app.listen(porta, () => {                                       // 'rs' reinicia o servidor 
    console.log(`Servidor está executando na porta ${porta}.`)
})