console.log(this === global)                // Aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)               // É verdadeiro,pois aponta para a mesma referência(objeto)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)        // Dentro de uma função,o this não aponta para module.exports
    console.log(this === global)

}

logThis()