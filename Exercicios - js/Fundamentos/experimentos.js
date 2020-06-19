let a = 3               // variável local (não é exportada)

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)             // retorna um objeto / Equivalente a: module.exports = {e: 456, f: false, g:'teste'}

//criando uma variável maluca: sem var e let!
abc = 3                                 // não faça isso, pois a variável fica global(em todo o escopo)
console.log(global.abc)

