// O objeto em JS tem uma referencia para o seu protótipo (herança)

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)              // o objeto não tem a propriedade prototype, somente a .__proto__
console.log(ferrari.__proto__)      // objeto vazio
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)             // aponta para null(não existe outro acima dele )
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)                // são funções
console.log(Object.prototype, MeuObjeto.prototype)          // são objetos
