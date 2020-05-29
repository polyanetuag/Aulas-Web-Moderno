// Função SEM retorno
function imprimirSoma(a, b) {
    console.log(a +b)
}
imprimirSoma(2, 3)
imprimirSoma(2)    // número inteiro com um undefined = not a number
imprimirSoma (2, 10, 4, 5, 6, 7, 8)    // só soma os primeiros e ignora os outros
imprimirSoma()

// Função COM retorno

function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())     //  o primeiro valor ão foi tratado, por isso NaN
