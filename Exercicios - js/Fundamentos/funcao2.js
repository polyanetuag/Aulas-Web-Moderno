// Armazenando uma função em uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variável

const soma = (a, b) => {            // => forma reduzida da função
    return a + b
}
console.log( soma(2,3))

// Retorno impícito

const subtracao = (a, b) => a - b       // Mais reduzida
console.log(subtracao(2, 3))
/* => função
a-b = retorno
*/

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')