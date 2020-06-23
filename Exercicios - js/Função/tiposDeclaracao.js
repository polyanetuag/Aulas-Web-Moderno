console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression              //Ambas as functions expressions devem ser chamadas depois da função, nunca antes.
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression         // pouca usada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))