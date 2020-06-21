// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())            // Quando não definido = 1
console.log(soma1(3))           // somente a foi definido
console.log(soma1(1, 2, 3))       
console.log(soma1(0, 0, 0))       // Quando passado 0, a expressão se torna falsa, e recebe valor 1 (bug)

//estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2())              
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0 , 0))        // Nesse caso, o resultado é como o esperado = 0


//valor padrão do es2015 (forma + adequada)
function soma3( a = 1, b = 1, c = 1 ) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))