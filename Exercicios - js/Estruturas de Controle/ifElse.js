const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(5)
imprimirResultado(10)
imprimirResultado('Epa!')      // cuidado!!! fraca tipagem