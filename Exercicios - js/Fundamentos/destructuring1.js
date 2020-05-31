// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa    // outra forma de fazer 
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)      // sobrenome não foi definido(undefined)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)     // cep não foi definido(undefined)

const { conta: {ag, num}} = pessoa      // ERRO! Pois não existem esses dados (Cuidado ao tentar desestruturar um dado aninhado)
console.log(age, num)
