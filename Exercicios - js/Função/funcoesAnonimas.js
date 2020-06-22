const soma = function(x, y) {                   //função anônima: sem nome 
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

imprimirResultado(3, 4, function(x, y) {       // função dentro de uma função
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)       //náo tem como dar nome para uma arrow function (sempre será anônima)

const pessoa = {                               //função anônima dentro de um objeto
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()