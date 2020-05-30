console.log(typeof Object)               // funçao
console.log(typeof new Object)           // objeto ('instanciado pela palavra new')

const Cliente = function() {}
console.log(typeof Cliente)             // função
console.log(typeof new Cliente)         // objeto

class Produto {}   // Padrão ES 2015 (ES6)
console.log(typeof Produto)             // função
console.log(typeof new Produto())         // objeto

