// O Map serve para transformar um array em outro
// A regra é o mesmo tamanho dos arrays (original e com o map) 

const nums = [1, 2, 3, 4, 5]

// O map é um for com propósito
let resultado = nums.map(function(e) {
    return e * 2                            // irá retornar o dobro do array
})

console.log(resultado)


// O map não transforma o array atual; ele gera um novo

// 3 funções
const soma10 = e => e + 10
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)                  //chamada de 3 funções
console.log(resultado)