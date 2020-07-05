const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}

console.log(Object.keys(pessoa))        //objeto = coleção de chaves e valores 
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))     //chaves e valores 

// Percorrendo a array
Object.entries(pessoa).forEach(([chave, valor]) => {            // utilizando destructing
    console.log(`${chave}: ${valor}`)
})

// Definir a propriedade do objeto de uma forma mais completa
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,                                           // aceita ser listada
    writable: false,                                            // não aceita modificações(tipo um freeze)
    value:'01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'                            // a data mostrada será a original, por não aceitar modificações   
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assing (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }                       // o valor será sobrescrito o último valor definido 
const obj = Object.assign(dest, o1, o2)        // concatena os atributos de cada objeto

Object.freeze(obj)
obj.c = 1234
console.log(obj)